// let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}



// window.onscroll = () =>{
//     navbar.classList.remove('active');

//     if(window.scrollY > 0){
//         document.querySelector('.header').classList.add('active');
//     }else{
//         document.querySelector('.header').classList.remove('active');
//     }
// };

// window.onload = () =>{
//     if(window.scrollY > 0){
//         document.querySelector('.header').classList.add('active');
//     }else{
//         document.querySelector('.header').classList.remove('active');
//     }
// };






// -------------------------------------------to top scroller------------------------------------

// const toTop = document.querySelector(".to-top");

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 100) {
//     toTop.classList.add("active");
//   } else {
//     toTop.classList.remove("active");
//   }
// })






// --------------------------------------------product main page js----------------------------------

let tabs = document.querySelectorAll('.tabs__toggle'),
    contents = document.querySelectorAll('.tabs__content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});

  $(document).ready(function() {
      // Sample image data - replace with your own images and titles
      const images = [
          { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/4d/4b/f5/tirana-viaggioinalbania.jpg?w=1000&h=600&s=1', alt: 'Nature 1', title: 'Grand Park (Parku i Madh)', locationKey: 'parku'},
          { src: 'https://eia476h758b.exactdn.com/wp-content/uploads/2023/09/ftgy7trp-be-1024x683.jpg?strip=all&lossy=1&ssl=1', alt: 'Nature 2', title: 'Skanderbeg Square (Sheshi Skënderbeg)', locationKey: 'sheshi' },
          { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/3d/ef/e4/caption.jpg?w=1400&h=800&s=1', alt: 'Nature 3', title: 'Ethem Mosque (Xhamia Ethem Bey)', locationKey: 'xhamia' },
          { src: 'https://scontent.ftia18-1.fna.fbcdn.net/v/t1.6435-9/52347589_1991922464209503_8367159556094033920_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHtVuZAH7pXAUovE6PtJlLAV2YJsd6v5HtXZgmx3q_kexFBpbAt4mgLDtzJx514uYQJd1vroq193erSYETU1qy1&_nc_ohc=wTvmHvL1Jk4Q7kNvwHyxu2D&_nc_oc=Admp8CkrugqDjj_JUeV7gQF_Rt8RoVVQoTisV9cor1SBZ0eZMJ3WCwUu-nxbki67UI4&_nc_zt=23&_nc_ht=scontent.ftia18-1.fna&_nc_gid=MUzzOF--xZDFjtx2H7ZEZg&oh=00_AfEeMijn5QZ9mRMxxwdj0pGhL3piXvrP8KHclujfVEwYZQ&oe=681BC702', alt: 'Nature 4', title: 'National History Museum (Muzeu Historik Kombetar)', locationKey: 'muzeu' },
          { src: 'https://image.arrivalguides.com/x/05/a01326654ab5e162fa63afcb655ff82c.jpg', alt: 'Nature 5', title: 'Orthodox Cathedral "Resurrection of Christ" (Katedralja Ortodokse “Ngjallja e Krishtit”)', locationKey: 'kisha' },
          { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/87/1c/37/warm-spaces-of-new-baazar.jpg?w=1000&h=600&s=1', alt: 'Nature 6', title: 'New Bazaar (Pazari i Ri)', locationKey: 'pazari' },
          { src: 'https://www.aadf.org/wp-content/uploads/2023/10/5-.jpg', title: 'Pyramid of Tirana (Piramida e Tiranës)', locationKey: 'piramida' },
          { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiwJFytS1cPjmtwWdszzmh_wI51QLktogoDw0fxSUHr8BelPhxtmyikZ-t4oGiKHoHMnI&usqp=CAU', alt: 'Nature 8', title: 'Tanners-Bridge (Ura e Tabakëve)', locationKey: 'ura' },
          { src: 'https://lh3.googleusercontent.com/p/AF1QipPk9GKjLC9ZhxohlNIQXMdTAI6Ikx5KH7icCGCH=w400-h300-k-no', alt: 'Nature 9', title: 'Tirana Maternity Hospital (Materniteti i Tiranës)', locationKey: 'materniteti' },
          { src: 'https://i6tk28sbcv.gjirafa.net/businessdirectoryphotos/large/fb28daead0ea399a8ab08b067032e578_20170111_095805.jpg', alt: 'Nature 10', title: 'Civil Hospital (Spitali Ushtarak)', locationKey: 'ushtarak' },
          { src: 'https://www.visitalbania.app/wp-content/uploads/2022/06/tirana-cloak-tower1.jpg', alt: 'Nature 11', title: 'Clock Tower (Kulla e Sahatit)', locationKey: 'kulla' },
          { src: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Lana_river_in_Tirana_2.jpg', alt: 'Nature 12', title: 'Lana River (Lumi Lana)', locationKey: 'lana' },
          { src: 'https://media.spottedbylocals.com/spot/museum-of-the-bank-of-albania-tirana-by-public-domain.jpg', alt: 'Nature 13', title: 'Bank of Albania Museum (Banka e SHqipërisë)', locationKey: 'banka' },
          { src: 'https://observerkult.com/wp-content/uploads/2021/05/kalaja.jpg', alt: 'Nature 14', title: 'Petrela Castle (Kalaja e Petrela)', locationKey: 'petrela' },
          { src: 'https://top-channel.tv/wp-content/uploads/2023/07/rdt.png', alt: 'Nature 15', title: 'Ish-Radio Tirana', locationKey: 'radio' },
          { src: 'https://lh3.googleusercontent.com/gpms-cs-s/AIMqDu1B8N2Sp-zipVxqrFU7THEItVrN28adNdXylmlqO4bbqmuSf_0MsGGCIsNTajGNqx2-mxCtEeEqQCsfnfpmsTmBp-Fyg1bJLKk_EykUglj0-EBk7fAWNcs5dg3xO84P9oepZw3HGQ=w400-h300-k-no', alt: 'Nature 16', title: 'Playground (Sheshi i lojërave)', locationKey: 'playground' },
          { src: 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/09/02/thumbs_b_c_51cb7d7a7cfa86efd7450e900716bfa9.jpg?v=183256', alt: 'Nature 17', title: 'Tirana Castle (Kalaja i Tiranës)',locationKey: 'kalaja' },
          { src: 'https://shqiptarja.com/uploads/780x440/1668691964_teatrikombetar.jpg', alt: 'Nature 18', title: 'National Theatre (Teatri Kombëtar në Shqipëri)',locationKey: 'teatri' },
          { src: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Bashkia_e_Tiranes.JPG', alt: 'Nature 20', title: 'Tirana City Hall (Bashkia e Tiranës)', locationKey: 'bashkia' },
          { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/523678439.jpg?k=2b90b711547a7bce17328228879080ef1a2c1b848a39de996030a58a1f280f63&o=&hp=1', alt: 'Nature 21', title: 'Tirana International Hotel (Hotel Tirana Ndërkombëtar)', locationKey: 'hoteli' },
          { src: 'https://shqiptarja.com/uploads/1654325918_kopshtizoologjik17.jpg', alt: 'Nature 22', title: 'Tirana Zoo (Kopshti Zoologjik i Tiranës)', locationKey: 'zoo' },
          { src: 'https://albania.al/wp-content/uploads/2022/03/50_visit_Bektashi_World_Center_tirana.jpg', alt: 'Nature 23', title: 'Bektashi World Center (Qendra Botërore Bektashiane)', locationKey: 'bektashi' },
          { src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/6e/ce/69/kapllan-pasha-s-tomb.jpg?w=1100&h=-1&s=1', alt: 'Nature 24', title: 'Kapllan Pashas Tomb (Varri i Kapllan Pashës)', locationKey: 'varri' },
          { src: 'https://i.ytimg.com/vi/LXvlr-rVqr8/maxresdefault.jpg', alt: 'Nature 24', title: 'New Boulevard (Bulevardi i Ri)', locationKey:'biri'},
          { src: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Bulevardi_Zog_I_in_Tirana.jpg', alt: 'Nature 24', title: 'Zogu i Parë Boulevard (Bulevardi Zogu i Parë)', locationKey:'zogip'},
          { src: 'https://p1crires.cri.cn/photoworkspace/cri/contentimg/2023/03/15/2023031509593168673.jpg', alt: 'Nature 24', title: 'Zog i Zi Boulevard (Bulevardi Zogu i Zi)', locationKey:'zogizi'},
          { src: 'https://cdnimpuls.com/dosja.al/media3/-640-0-1740499339x640-0-1740469012xkamez-albania-07-agricultural-university-of-tirana-279-307.webp', alt: 'Nature 24', title: 'Instituti Bujqësor i Tiranës (University Bujqësor of Tirana)', locationKey:'ubt'},
          { src: 'https://javanews.al/wp-content/uploads/2020/05/kino-747x375.png', alt: 'Nature 24', title: 'Kinostudio e Vjetër Shqiptare (Old Kinostudio)', locationKey:'kino'},
          { src: 'https://preview.redd.it/lznames69ux71.jpg?width=640&crop=smart&auto=webp&s=b84d8c0403063358086533f34fcece9bb4ee762f', alt: 'Nature 24', title: 'Kisha e Shën Palit (Shën Pals Church)', locationKey:'pali'},
          { src: 'https://probizz.al/wp-content/uploads/2023/07/Kanionet-e-Erzenit-1030.jpg', alt: 'Nature 24', title: 'Lumi Erzen (Erzen River)', locationKey:'erzen'},
          { src: 'https://www.balkanweb.com/wp-content/uploads/2017/10/9ac002269de7c5bee7e800f0f0fe2f2f.jpg', alt: 'Nature 24', title: 'Pallati i Brigadave (Palace of Brigada)', locationKey:'brig'},    
          { src: 'https://media.licdn.com/dms/image/v2/D5622AQFgd4dhnDA0zA/feedshare-shrink_800/feedshare-shrink_800/0/1697053369664?e=2147483647&v=beta&t=4SsaPLbLgJXESRVPA03U7NHlV0JaaHZ17brVYY8vBo8', alt: 'Nature 24', title: 'Universiteti Politeknik i Tiranës (UPT)', locationKey:'politeknik'}      

      ];
      
      // Configuration
      const itemsPerPage = 8;
      let currentPage = 1;
      
      // Initialize the gallery
      function initGallery() {
          displayGalleryItems(currentPage);
          setupPagination();
      }
      
      // Display gallery items for the current page
      function displayGalleryItems(page) {
          const gallery = $('#gallery');
          gallery.empty();
          
          const startIndex = (page - 1) * itemsPerPage;
          const endIndex = Math.min(startIndex + itemsPerPage, images.length);
          
          for (let i = startIndex; i < endIndex; i++) {
              const image = images[i];
          // In your displayGalleryItems function, modify the gallery.append code:
            gallery.append(`
                <div class="gallery-item" onclick="openGalleryTimeline('${image.locationKey}')">
                    <div class="gallery-image-container">
                        <img src="${image.src}" alt="${image.alt}" class="gallery-image">
                    </div>
                    <div class="image-title">${image.title}</div>
                </div>
            `);
          }
      }
      

      
      // Setup pagination buttons
      function setupPagination() {
          const pagination = $('#pagination');
          pagination.empty();
          
          const totalPages = Math.ceil(images.length / itemsPerPage);
          
          // Previous button
          pagination.append(`
              <button class="pagination-button prev ${currentPage === 1 ? 'disabled' : ''}">
                  <i class="fas fa-chevron-left"></i>
              </button>
          `);
          
          // Page numbers
          const maxVisiblePages = 5;
          let startPage, endPage;
          
          if (totalPages <= maxVisiblePages) {
              startPage = 1;
              endPage = totalPages;
          } else {
              const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
              const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;
              
              if (currentPage <= maxPagesBeforeCurrent) {
                  startPage = 1;
                  endPage = maxVisiblePages;
              } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
                  startPage = totalPages - maxVisiblePages + 1;
                  endPage = totalPages;
              } else {
                  startPage = currentPage - maxPagesBeforeCurrent;
                  endPage = currentPage + maxPagesAfterCurrent;
              }
          }
          
          // First page and ellipsis if needed
          if (startPage > 1) {
              pagination.append(`
                  <button class="pagination-button" data-page="1">1</button>
              `);
              if (startPage > 2) {
                  pagination.append('<span class="ellipsis">...</span>');
              }
          }
          
          // Page numbers
          for (let i = startPage; i <= endPage; i++) {
              pagination.append(`
                  <button class="pagination-button ${i === currentPage ? 'active' : ''}" data-page="${i}">
                      ${i}
                  </button>
              `);
          }
          
          // Last page and ellipsis if needed
          if (endPage < totalPages) {
              if (endPage < totalPages - 1) {
                  pagination.append('<span class="ellipsis">...</span>');
              }
              pagination.append(`
                  <button class="pagination-button" data-page="${totalPages}">
                      ${totalPages}
                  </button>
              `);
          }
          
          // Next button
          pagination.append(`
              <button class="pagination-button next ${currentPage === totalPages ? 'disabled' : ''}">
                  <i class="fas fa-chevron-right"></i>
              </button>
          `);
          
          // Add event listeners
          $('.pagination-button').not('.disabled').on('click', function() {
              const btn = $(this);
              
              if (btn.hasClass('prev')) {
                  currentPage--;
              } else if (btn.hasClass('next')) {
                  currentPage++;
              } else {
                  currentPage = parseInt(btn.data('page'));
              }
              
              displayGalleryItems(currentPage);
              setupPagination();
              
              // Smooth scroll to top of gallery
              $('html, body').animate({
                  scrollTop: $('.gallery-container').offset().top - 20
              }, 300);
          });
      }
      
      // Initialize the gallery
      initGallery();
      // Add this function to your script

  });
  function openGalleryTimeline(locationKey) {
    // Find the location data by key
    const location = locations.find(loc => loc.key === locationKey);
    if (location) {
        showDestinationInfo(location); // This will open the sidebar
        showTimeline(); // This will open the timeline/polaroid gallery
    }
}

// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.add('active');
// }

// document.querySelector('#close-search').onclick = () =>{
//     searchForm.classList.remove('active');
// }
