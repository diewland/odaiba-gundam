# Odaiba Gundam
Last updated 2019/06/29

### How to gather portal data

0. read how to use mitmproxy as android proxy first ( <a href="https://medium.com/@diewland/how-to-sniff-android-network-65ca4bba1267">link</a> )
1. start proxy server
```
mitmdump -s get_portal_images.py
```
2. config android wifi to proxy in step 1
2. open ingress, remote to Gundam key
3. view photo gallery ( data will update in ```portal_photos.json``` )
4. scroll down till last photo ( data will update in ```portal_photos.json``` )
5. now we got latest data in ```portal_photos.json```

### References
* python proxy - https://mitmproxy.org
* web ui fw - https://getbootstrap.com
* pinterest layout - https://masonry.desandro.com
* gallery - http://sachinchoolur.github.io/lightGallery

Photo by SANZAI<br><img src='https://camo.githubusercontent.com/267b5ca22d7c70440376f5be1369ff4b8d7cd6c7/687474703a2f2f6c68342e67677068742e636f6d2f43644b55656c4e6a4c4b7070356e486e574e764c5a635545705275323045702d7a484b4d6a4174564e64706d4f686e616b69467565754c357959634c31432d4a5849712d47344c464a4c61436e55547a7046773d7331303234'>
