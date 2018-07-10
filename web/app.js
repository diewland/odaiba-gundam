// display loading modal
$('.modal').modal('show');
var item_done = 0;
var item_size = gundam_photos.length;

// render gundam photos
gundam_photos.forEach(function(row, index){
  var url = row.imageUrl.replace("http://", "https://");
  $('.grid').append(`
    <div class="grid-item">
      <a href="${url}" data-sub-html="No.${index+1} ${row.attributionMarkup[1].plain}<br>${row.voteCount} votes">
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
  // update masonry
  $grid.masonry();

  // update progress bar / modal
  item_done++;
  pct = Math.round(item_done/item_size*100);
  $('#pct').html(pct+'%');
  if(item_done == item_size){
    $('.modal').modal('hide');

    // bind slideshow
    $('.grid').lightGallery({
      selector: '.grid-item a'
    });
  }
}); 
