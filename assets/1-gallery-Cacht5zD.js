import{S as p}from"./vendor-CgTBfC_f.js";const s=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],l=document.querySelector(".gallery"),r=s.map(({preview:i,original:a,description:o})=>`<li class="gallery-item">
                    <a class="gallery-link" href="${a}">
                        <img
                            class="gallery-image"
                            src="${i}"
                            alt="${o}"
                        />
                    </a>
                </li>`).join("");function c(){localStorage.clear()}function h(){const i=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,overlay:!0});function a(o,e,n){const t=document.createElement("div");t.className="circle",t.style.left=`${0+o}px`,t.style.top=`${0+e}px`,t.style.width="50px",t.style.height="50px",t.style.border="3px solid black",n.appendChild(t),setTimeout(()=>{t.remove()},250)}i.on("next.simplelightbox",function(){c();const o=-3,e=0,n=document.querySelector(".sl-next");a(o,e,n),console.log("Next image is shown")}),i.on("prev.simplelightbox",function(){c();const o=-3,e=0,n=document.querySelector(".sl-prev");a(o,e,n),console.log("Previous image is shown")}),i.on("changed.simplelightbox",function(o){const e=document.querySelector(".sl-overlay");console.log("Clicked on show-overlay",e,o)}),i.on("close.simplelightbox",function(o){const e=document.querySelector(".sl-close");a(-3,-5,e),console.log("Lightbox is about to be closed",e,o)})}document.addEventListener("DOMContentLoaded",h);l.insertAdjacentHTML("beforeend",r);
//# sourceMappingURL=1-gallery-Cacht5zD.js.map
