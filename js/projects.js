// import nftData from './nftData.js';


  
//   const filterContainer = document.getElementById("filter-container");
  
//   for (let i = 0; i < nftData.length; i++) {
//     const video = nftData[i];
  
//     const videoElement = document.createElement("div");
//     videoElement.className = "video";
  
//     const titleElement = document.createElement("h3");
//     titleElement.innerText = video.name;
  
//     const iframeElement = document.createElement("h2");
//     iframeElement.src = video.link;
  
//     videoElement.appendChild(titleElement);
//     videoElement.appendChild(iframeElement);
  
//     filterContainer.appendChild(videoElement);
//   }


//   console.log(video.name)
 

document.addEventListener('DOMContentLoaded', () => {
  // Fetch projects from JSON file
  fetch('js/projects.json')
    .then(response => response.json())
    .then(data => {
      // Get the project list container
      const projectList = document.querySelector('.project-list');

      // Loop through each project and create a card element with its properties
      data.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add(project.category); // add the project category as a class for filtering

        const image = document.createElement('img');
        image.src = project.imageSrc;
        image.alt = project.name;
        card.appendChild(image);

        const title = document.createElement('h3');
        title.textContent = project.name;
        card.appendChild(title);

        const description = document.createElement('p');
        description.textContent = project.description;
        card.appendChild(description);

        projectList.appendChild(card);
      });
    })
    .catch(error => console.error(error));

  // Add click event listener to filter links
  document.querySelectorAll('.filter').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // Get the filter category from the data attribute
      const filter = link.dataset.filter;

      // Show/hide projects based on the filter category
      document.querySelectorAll('.card').forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });

      // Set the selected filter link
      document.querySelectorAll('.filter').forEach(link => {
        link.classList.remove('selected');
      });
      link.classList.add('selected');
    });
  });
});











// fetch('js/projects.json')
//   .then(response => response.json())
//   .then(data => {
//     const featured = document.querySelector('.home-featured');
    
//     const filter = document.createElement('div')
//     filter.className = 'filter-container nft';
//     // Add filter container to featured element
//     featured.appendChild(filter);

//     // Loop through each project and create a figure element with its properties
//     data.forEach(project => {
//       const figure = document.createElement('figure');
//       // Determine the class for the figure element based on project description
//       let figureClass = 'blank';
//       if (project.description.includes('NFT')) {
//         figureClass = 'nft';
//       }
//       if (filter === '*' || filter === figureClass) {
//         const figure = document.createElement('figure');
//         figure.classList.add(figureClass);
//         // Create elements for the figure element
//         // ...
//         filterContainer.appendChild(figure);
//       }
      
//       const link = document.createElement('a');
//       link.target = '_blank';
//       link.href = project.twitterUrl;
//       link.classList.add('thumb');
      
//       const image = document.createElement('img');
//       image.src = project.imageSrc;
//       image.alt = project.name;
      
//       link.appendChild(image);
      
//       const caption = document.createElement('figcaption');
      
//       const name = document.createElement('h3');
//       name.classList.add('heading');
//       name.textContent = project.name;
      
//       const description = document.createElement('p');
//       description.textContent = project.description;
      
//       const discordLink = document.createElement('a');
//       discordLink.target = '_blank';
//       discordLink.href = project.discordUrl;
      
//       const discordButton = document.createElement('button');
//       discordButton.classList.add('button');
//       discordButton.textContent = 'Discord';
      
//       const twitterLink = document.createElement('a');
//       twitterLink.target = '_blank';
//       twitterLink.href = project.twitterUrl;
      
//       const twitterButton = document.createElement('button');
//       twitterButton.classList.add('button');
//       twitterButton.textContent = 'Twitter';
      
//       discordLink.appendChild(discordButton);
//       twitterLink.appendChild(twitterButton);
      
//       caption.appendChild(name);
//       caption.appendChild(description);
//       caption.appendChild(document.createElement('br'));
//       caption.appendChild(discordLink);
//       caption.appendChild(twitterLink);
      
//       figure.appendChild(link);
//       figure.appendChild(caption);
     
//       filter.appendChild(figure);
//     });
//     featured.appendChild(filter)
//   })
//   .catch(error => console.error(error));

//   $(document).ready(function() {
//     // Add click event listener to filter buttons
//     $('#filter-buttons').on('click', 'a', function(e) {
//       console.log('Filter button clicked'); 
//       e.preventDefault(); // Prevent default link behavior
  
//       // Remove selected class from all buttons
//       $('#filter-buttons a').removeClass('selected');
//       // Add selected class to clicked button
//       $(this).addClass('selected');
  
//       // Get the filter category from the data attribute
//       var filter = $(this).data('filter');
//       console.log(filter)
  
//       /// Show/hide items based on the filter category
//       if (filter === '*') {
//         $('.nft').show();
//       } else {
//         $('.nft').hide();
//         $('.blank').show();
//       }
//     });
//   });
  
  