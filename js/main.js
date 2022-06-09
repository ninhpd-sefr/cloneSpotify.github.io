const element_top100VN_playListSpace = document.querySelector("#top100_VN")
const element_top100AM_playListSpace = document.querySelector("#top100_AM")
const element_top100CA_playListSpace = document.querySelector("#top100_CA")
const element_top100KL_playListSpace = document.querySelector("#top100_KL")
const element_musicName_pLayerBar = document.querySelector(".musicInfor > .title > .musicName")
const element_author_pLayerBar = document.querySelector(".musicInfor > .title > .author")
const element_avatar_pLayerBar = document.querySelector(".musicInfor > .image > img")
const element_audioTag = document.querySelector("#audioSpace")
const element_playBtn_playerBar = document.querySelector("#playBtn")
const element_pauseBtn_playerBar = document.querySelector("#pauseBtn")
const element_inputMusicProccess_playerBar = document.querySelector("#inputMusicProccess")
const element_controlVolume_playerBar = document.querySelector("#controlVolume")
const element_highVolumeIcon_playerBar = document.querySelector("#highVolume")
const element_lowVolumeIcon_playerBar = document.querySelector("#lowVolume")
const element_noneVolumeIcon_playerBar = document.querySelector("#noneVolume")
const element_shuffleBtn_playerBar = document.querySelector("#shuffleBtn")
const element_repeatBtn_playerBar = document.querySelector("#repeatBtn")
const element_currentTimeText_playerBar = document.querySelector(".currentTime")
const element_totalTimeText_playerBar = document.querySelector(".totalTime")
const element_playListSpace = document.querySelector(".playListSpace")
const element_listSongInAlbumSpace = document.querySelector(".listSongInAlbumSpace")
const element_tableSongListInAlbum = document.querySelector(".tableSongList")
const element_avatarAlbumInAlbumSpace = document.querySelector("#avatarAlbum")
const element_titleAlbumInAlbum = document.querySelector("#titleAlbum")
const element_playBtn_albumLabel = document.querySelector("#playBtn_albumLabel")
const element_pauseBtn_albumLabel = document.querySelector("#pauseBtn_albumLabel")
const element_playBtn_AlbumSpace = document.querySelector("#playBtn_Album")
const element_pauseBtn_AlbumSpace = document.querySelector("#pauseBtn_Album")
const element_contentBtn_AlbumSpace = document.querySelector(".contentBtn")
const element_trTag_AlbumSpace = document.querySelectorAll(".rowOfTable")
const element_musicPlayerBar = document.querySelector(".musicPlayerBar")


let currentSongIndex
let currentAlbum
let currentTopic
let isPlaying
let isRepeat = false
let isRandom = false
let indexMusicPlayed = []
let isInAlbum = false
let listMusic

// function getIndexOfSong(indexSong) 
// { 
//   if(dataIndex)
//   {
//     currentSongIndex = dataIndex
//     element_audioTag.setAttribute("src", `${listMusic[currentSongIndex].music}`) 
//     console.log("done")
//   }            
// }

const api = "https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR0HkDrTsVyqV6WRZFE7SDwmcU5WHafNStsdAupjHLdFvuPYTvG1khaHjQA"
fetch(api)
      .then(res => res.json())
      .then(data => 
        {
          console.log(data)
          renderAlbumList()
          getLocal()
          updateFromLocal()
          console.log(listMusic)
          function updateFromLocal()
          {
            displayMusicInfor()
            if(listMusic)
            {
              element_audioTag.setAttribute("src", `${listMusic[currentSongIndex].music}`) 
              element_audioTag.pause()
              element_shuffleBtn_playerBar.classList.toggle("toggle", isRandom)
              element_repeatBtn_playerBar.classList.toggle("toggle", isRepeat)               
            }
          }
          function getLocal()
          {
            currentSongIndex = JSON.parse(window.localStorage.getItem("currentSongIndex"))
            currentAlbum = window.localStorage.getItem("currentAlbum")
            isRepeat = JSON.parse(window.localStorage.getItem("isRepeat"))
            isRandom = JSON.parse(window.localStorage.getItem("isRandom"))
            isInAlbum = JSON.parse(window.localStorage.getItem("isInAlbum"))
            listMusic = JSON.parse(window.localStorage.getItem("listMusic"))
          }  
          function saveLocal(key, value, isArray)
          {
            if(isArray==true)
            {
              window.localStorage.setItem(key, JSON.stringify(value))
            }
            else
            {
              window.localStorage.setItem(key, value)
            }
          }
          function renderAlbumList () 
          {
            element_top100VN_playListSpace.innerHTML = ""
            element_top100AM_playListSpace.innerHTML = ""
            element_top100CA_playListSpace.innerHTML = ""
            element_top100KL_playListSpace.innerHTML = ""
            element_inputMusicProccess_playerBar.value = 0
            element_controlVolume_playerBar.value = 100
            let top100_VN = data.songs.top100_VN
            for(let i = 0; i < top100_VN.length; i++)
            { 
              let addItem = document.createElement("div")
              addItem.classList.add("playListItem")
              addItem.setAttribute("data-index", `${i}`)
              let img = top100_VN[i].songs[0].coverImage
              let playListName = top100_VN[i].name
              addItem.innerHTML = `
                <div class="image">
                    <img src=${img} alt="">
                    <div class="playBtnPlayList">
                      <i class="fa-solid fa-play"></i>
                    </div>
                </div>
                <p class="playListName">${playListName}</p>
              `
              element_top100VN_playListSpace.appendChild(addItem)
            }
            let top100_AM = data.songs.top100_AM
            for(let i = 0; i < top100_AM.length; i++)
            {
              let addItem = document.createElement("div")
              addItem.classList.add("playListItem")
              addItem.setAttribute("data-index", `${i}`)
              let img = top100_AM[i].songs[0].coverImage
              let playListName = top100_AM[i].name
              addItem.innerHTML = `
                <div class="image">
                    <img src=${img} alt="">
                    <div class="playBtnPlayList">
                      <i class="fa-solid fa-play"></i>
                    </div>
                </div>
                <p class="playListName">${playListName}</p>
              `
              element_top100AM_playListSpace.appendChild(addItem)
            }
            let top100_CA = data.songs.top100_CA
            for(let i = 0; i < top100_CA.length; i++)
            {
              let addItem = document.createElement("div")
              addItem.classList.add("playListItem")
              addItem.setAttribute("data-index", `${i}`)
              let img = top100_CA[i].songs[0].coverImage
              let playListName = top100_CA[i].name
              addItem.innerHTML = `
                <div class="image">
                    <img src=${img} alt="">
                    <div class="playBtnPlayList">
                      <i class="fa-solid fa-play"></i>
                    </div>
                </div>
                <p class="playListName">${playListName}</p>
              `
              element_top100CA_playListSpace.appendChild(addItem)
            }
            let top100_KL = data.songs.top100_KL
            for(let i = 0; i < top100_KL.length; i++)
            {
              let addItem = document.createElement("div")
              addItem.classList.add("playListItem")
              addItem.setAttribute("data-index", `${i}`)
              let img = top100_KL[i].songs[0].coverImage
              let playListName = top100_KL[i].name
              addItem.innerHTML = `
                <div class="image">
                    <img src=${img} alt="">
                    <div class="playBtnPlayList">
                      <i class="fa-solid fa-play"></i>
                    </div>
                </div>
                <p class="playListName">${playListName}</p>
              `
              element_top100KL_playListSpace.appendChild(addItem)
            }
          } 
          function displayListSongInAlbum()
          {
            if(listMusic)
            {
              let img = listMusic[0].coverImage
              element_titleAlbumInAlbum.innerHTML = currentAlbum
              element_avatarAlbumInAlbumSpace.src = img
              element_tableSongListInAlbum.innerHTML = 
              `
                <tr>
                  <th class="indexColumn">#</th>
                  <th class="nameColumn">SONG</th>
                  <th class="authorColumn">AUTHOR</th>
                </tr>
              `
              for(let i = 0; i < listMusic.length; i++)
              {
                let addTr = document.createElement("tr")
                addTr.setAttribute("data-index", i)
                addTr.classList.add("rowOfTable")
                addTr.innerHTML = 
                `
                  <td>${Number(i+1)}</td>
                  <td class="nameSongRow">
                    <div class="image">
                      <img src=${listMusic[i].avatar} alt="">
                    </div>
                    <span>${listMusic[i].title}</span>
                  </td>
                  <td>${listMusic[i].creator}</td>
                `
                element_tableSongListInAlbum.appendChild(addTr)
              }
            }
          }
          function checkFollowPlaying()
          {
            if(isPlaying == true)
            {
              element_playBtn_albumLabel.style = "display: none"
              element_playBtn_AlbumSpace.style = "display: none"
              element_pauseBtn_albumLabel.style = "display: block"
              element_pauseBtn_AlbumSpace.style = "display: block"
              element_contentBtn_AlbumSpace.innerHTML = "Pause"
            }
            else
            {
              element_pauseBtn_albumLabel.style = "display: none"
              element_pauseBtn_AlbumSpace.style = "display: none"
              element_playBtn_albumLabel.style = "display: block"
              element_playBtn_AlbumSpace.style = "display: block"
              element_contentBtn_AlbumSpace.innerHTML = "Play"
            }
            let arrayTr = document.querySelectorAll(".tableSongList tr")
            for(let i = 0; i < arrayTr.length; i++)
            {
              let dataIndex = $(arrayTr[i]).data("index")
              if(dataIndex == currentSongIndex)
              {
                arrayTr[i].style = "color: green;"
              }
              else
              {
                arrayTr[i].style = "color: #fff;"
              }
            }
          }
          function checkPlaying()
          {
            if(isInAlbum == true)
            {
              checkFollowPlaying()
            }
            if(isPlaying == true)
            {
              element_playBtn_playerBar.style = "display: none;"
              element_pauseBtn_playerBar.style = "display: block;"
              element_audioTag.play()
            }
            else if(isPlaying == false)
            {
              element_pauseBtn_playerBar.style = "display: none;"
              element_playBtn_playerBar.style = "display: block;"
              element_audioTag.pause()
            }
          }
          // render time
          function formatTimer(time)
          {
            let minutes = Math.floor(time / 60)
            let seconds = Math.floor(time - minutes * 60)
            if(!time) 
            {
              minutes = 0
              seconds = 0
            }
            return `${minutes}:${seconds}`
          }
          function displayMusicInfor()
          {
            if(!listMusic)
            {
              element_musicPlayerBar.style = "display: none;"
            }
            else
            {
              element_musicName_pLayerBar.innerHTML = `${listMusic[currentSongIndex].title}`
              element_author_pLayerBar.innerHTML = `${listMusic[currentSongIndex].creator}`
              element_avatar_pLayerBar.src = `${listMusic[currentSongIndex].avatar}`
              element_musicPlayerBar.style = "display: flex"
              if(isInAlbum == true)
              {
                element_playListSpace.style = "display: none"
                element_listSongInAlbumSpace.style = "display: flex"
                displayListSongInAlbum()
                checkFollowPlaying()
              }
            }            
          }
          function checkMusicPlayed(randomIndex)
          {
            let played = false
            if(indexMusicPlayed.length == listMusic.length) indexMusicPlayed = []
            for(let i = 0; i < indexMusicPlayed.length; i++)
            {
              if(indexMusicPlayed[i] == randomIndex) played = true
            }
            return played
          }
          function playRandomSong()
          {
            let randomIndex
            do 
            {
              randomIndex =  Math.floor(Math.random() * listMusic.length);
            }while (checkMusicPlayed(randomIndex) == true);
            currentSongIndex = randomIndex
            indexMusicPlayed.push(currentSongIndex)
            element_audioTag.setAttribute("src", `${listMusic[currentSongIndex].music}`) 
            saveLocal("currentSongIndex", currentSongIndex, false)
          }

        // NEXT SONG
          function nextSong()
          {
            if(isRandom == true)
            {
              playRandomSong()
            }
            else
            {
              if(currentSongIndex == Number(listMusic.length-1))
              {
                currentSongIndex = 0
              }
              else currentSongIndex = currentSongIndex = Number (currentSongIndex + 1)
              element_audioTag.setAttribute("src", `${listMusic[currentSongIndex].music}`)
              saveLocal("currentSongIndex", currentSongIndex, false)
            }
            isPlaying = true
            checkPlaying()
            displayMusicInfor()
            console.log("next song")
          }

          // PREVIOUS SONG
          function previousSong()
          {
            if(isRandom == true)
            {
              playRandomSong()
            }
            else
            {
              if(currentSongIndex == 0)
              {
                currentSongIndex = listMusic.length-1
              }
              else currentSongIndex = currentSongIndex = Number (currentSongIndex - 1)
              element_audioTag.setAttribute("src", `${listMusic[currentSongIndex].music}`)
              saveLocal("currentSongIndex", currentSongIndex, false)
            }
            isPlaying = true
            checkPlaying()
            displayMusicInfor()
            console.log("next song")
          }
          $(document).ready(function () {
            $(".playListItem").click(function (e) { 
              e.preventDefault();
              let index = $(this).data("index")
              let topic = this.parentElement.id
              let arrayMusic
              isPlaying = true
              indexMusicPlayed = []
              checkPlaying()
              switch(topic)
              {
                case "top100_VN":
                  arrayMusic = data.songs.top100_VN
                  currentTopic = "Top 100 Viet Nam"
                  break
                case "top100_AM":
                  arrayMusic = data.songs.top100_AM
                  currentTopic = "Top 100 America"
                  break
                case "top100_CA":
                  arrayMusic = data.songs.top100_CA
                  currentTopic = "Top 100 Asia"
                  break
                case "top100_KL":
                  arrayMusic = data.songs.top100_KL
                  currentTopic = "Top 100 instrumental music"
                  break
              }
              currentAlbum = arrayMusic[index].name
              listMusic = arrayMusic[index].songs
              saveLocal("listMusic", listMusic, true)
              saveLocal("currentAlbum", currentAlbum, false)
              console.log(listMusic)
              currentSongIndex = 0
              displayMusicInfor()
              element_audioTag.setAttribute("src", `${listMusic[currentSongIndex].music}`) 
              saveLocal("currentSongIndex", currentSongIndex, false)
            });
            $("#playBtn, #playBtn_albumLabel").click(function (e) { 
              e.preventDefault();
              isPlaying = true
              checkPlaying()
              console.log("play")
            });
            $("#pauseBtn, #pauseBtn_albumLabel").click(function (e) { 
              e.preventDefault();
              isPlaying = false
              checkPlaying()
              console.log("pause")
            });
            $("#playerBtn_Album").click(function (e) { 
              e.preventDefault();
              isPlaying = !isPlaying
              checkPlaying()
            });
            element_audioTag.ontimeupdate = function() 
            {
              let timeProccessPercent = (element_audioTag.currentTime * 100) / element_audioTag.duration
              element_inputMusicProccess_playerBar.value = timeProccessPercent
              element_currentTimeText_playerBar.innerHTML = formatTimer(element_audioTag.currentTime)
              element_totalTimeText_playerBar.innerHTML = formatTimer(element_audioTag.duration)
            }
            element_audioTag.onended = function() {
              if(isRepeat == true) element_audioTag.play()
              else nextSong()
            };
            $(element_inputMusicProccess_playerBar).change(function (e) { 
              e.preventDefault();
              element_inputMusicProccess_playerBar.value = e.target.value
              element_audioTag.currentTime = (e.target.value * element_audioTag.duration) / 100
            });
            // btn nextSong
            $("#nextSongBtn").click(function (e) { 
              e.preventDefault();
              nextSong()
            });
            // btn prevsong
            $("#previousSongBtn").click(function (e) { 
              e.preventDefault();
              previousSong()
            });
            
            $("#shuffleBtn").click(function (e) { 
              e.preventDefault();
              isRandom = !isRandom
              saveLocal("isRandom", isRandom, false)
              indexMusicPlayed = []              
              element_shuffleBtn_playerBar.classList.toggle("toggle", isRandom)
            });
            // btn repeat
            $("#repeatBtn").click(function (e) { 
              e.preventDefault();
              isRepeat = !isRepeat
              saveLocal("isRepeat", isRepeat, false)  
              element_repeatBtn_playerBar.classList.toggle("toggle", isRepeat)
         z   });
        //  control volume
            $(element_controlVolume_playerBar).change(function (e) { 
              e.preventDefault();
              element_audioTag.volume = e.target.value / 100
              if(element_audioTag.volume > 0.5) 
              {
                element_highVolumeIcon_playerBar.style = "display: block"
                element_lowVolumeIcon_playerBar.style = "display: none"
                element_noneVolumeIcon_playerBar.style = "display: none"
              }
              else if(element_audioTag.volume <= 0.5 && element_audioTag.volume > 0) 
              {
                element_highVolumeIcon_playerBar.style = "display: none"
                element_lowVolumeIcon_playerBar.style = "display: block"
                element_noneVolumeIcon_playerBar.style = "display: none"
              }
              else if(element_audioTag.volume == 0) 
              {
                element_highVolumeIcon_playerBar.style = "display: none"
                element_lowVolumeIcon_playerBar.style = "display: none"
                element_noneVolumeIcon_playerBar.style = "display: block"
              }
            });
            // render list song 
            $("#showListSongBtn").click(function (e) { 
              e.preventDefault();
              isInAlbum = !isInAlbum
              if(isInAlbum == true)
              {
                if(listMusic)
                {
                  element_playListSpace.style = "display: none"
                  element_listSongInAlbumSpace.style = "display: flex"
                  displayListSongInAlbum()
                  checkFollowPlaying()
                }
                else
                {
                  isInAlbum = !isInAlbum
                  alert("Choose album")
                }
              }
              else
              {
                element_listSongInAlbumSpace.style = "display: none"
                element_playListSpace.style = "display: block"
              }
              saveLocal("isInAlbum", isInAlbum, false)
            });
            // play item song 
              $(".rowOfTable").click(function (e) { 
              e.preventDefault();
              let dataIndex = $(this).data("index");
              console.log(dataIndex)

              if(dataIndex)
              {
                currentSongIndex = dataIndex
                element_audioTag.setAttribute("src", `${listMusic[currentSongIndex].music}`)
                isPlaying = true
                checkPlaying() 
                console.log("done")
              }
            });
            
  
            // $( function() {
            //   $("body").tooltip();
            // } )
          })
        })
