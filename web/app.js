// display loading modal
$('.modal').modal('show');
var item_done = 0;
var item_size = gundam_photos.length;

// render gundam photos
gundam_photos.forEach(function(row, index){
  var url = row.imageUrl.replace("http://", "https://");
  $('.grid').append(`
    <div class="grid-item">
      <a href="${url}=s1600" data-sub-html="No.${index+1} ${row.attributionMarkup[1].plain}<br>${row.voteCount} votes">
        <img src="${url}">
      </a>
    </div>`);
});

// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});

// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  // update progress
  item_done++;
  pct = Math.round(item_done/item_size*100);
  $('#pct').html(pct+'%');

  // when all images loaded
  if(item_done == item_size){
    // apply slideshow
    $('.grid').lightGallery({
      selector: '.grid-item a'
    });

    // update masonry
    $grid.masonry();

    // remove loading modal
    $('.modal').modal('hide');
  }
}); 
