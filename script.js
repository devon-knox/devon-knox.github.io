const calendarContainer = document.getElementById('calendar-container');
const fullscreenView = document.getElementById('fullscreen-view');
const fullscreenImgContainer = document.getElementById('fullscreen-img-container');
const fullscreenText = document.getElementById('fullscreen-text');
const closeBtn = document.getElementById('close-btn');

// Special day content with images
const dayContent = {
  '2024-02-16': {
    images: ['photos/2-16.jpg'],
    text: "February 16, 2024: Our first exchanges on text!!! I love to search up this text chain a lot just to see how far we've come.",
    title: 'First Texts'
  },
  '2024-03-18': {
    images: ['photos/3-18.jpg'],
    text: "March 18, 2024: WE BECOME BOYFRIEND AND GIRLFRIEND!!! I know this is the 17th, but I don't have any photos from the 18th lol. Also, it made me really nostalgic looking at this photo and thinking about when I called you at night and we had that little talk lol... silly Devon! Such an overthinker.",
    title: 'ANNIVERSARY!'
  },
  '2024-03-23': {
    images: ['photos/3-23-1.jpg', 'photos/3-23-2.jpg'],
    text: 'March 23, 2024: Birthday weekend and meeting the Davis family! This was when I TRULY met your wild side hahaaaaa. And I LOVE IT!',
    title: "Ella's 21st birthday weekend"
  },
  '2024-03-28': {
    images: ['photos/3-28-1.jpg', 'photos/3-28-2.jpg', 'photos/3-28-3.jpg'],
    text: "March 28, 2024: Ella hosted a shackles pregame 🍷 and it was so fun to be shackled together, walking around to people and acting like a married couple 💒. Then we got to the pike house and started dancing 🪩 like maniacs! Oh and THEN we went back to campus, had pitch and you chatted up with my friends as I tried to kiss you with my wing-covered face 🍗😂",
    title: 'MyTie'
  },

  '2024-03-30' : {
    images: ['photos/3-30-1.jpg','photos/3-30-2.jpg', 'photos/3-30-3.jpg', 'photos/3-30-4.jpg'],
    text: "March 30, 2024: The night began when we had Parizade right by your apartment, enjoying some drinks 🍹 before rushing back to the apartment to get ready for a pregame starting too soon ⏰! Ella agrees to get on a Bird 🛴 with Devon to save time, which she immediately regrets - fast turns, risky maneuvers and sexy drifts (I wish!). Anyways, the fucking scooter turns off when we enter the campus grounds, so we try to ride it slowly downhill and then just book it, sprinting in our fancy clothes to my dorm room. I’m a bit behind her after parking the scooter, and suddenly this guy and girl in a jeep see me and say, “need a lift?” so with no questions asked, I shout “YES!” and hop in the back. As Ella’s up the street, I shout at her from the jeep and we take a much-needed lift to the dorm room. We’ll just say it was an… interesting pregame (cough cough Ilana 😂… Ben was NOT having it). We take a bus there, and see our friends so we skip the entire line that wrapped around the block. By some coincidence, Ella met ABIGAIL (sorry John!) and they had some great convos apparently 👍🏻. After dancing the night away, I depart for a few hours to run a pledge event (GNOME NIGHT 😈😈😈). I scooter to Ella’s thru the sus 2 AM Durham streets, and thankfully she’s up! In her bed, she brings up why me and Harrison kept whispering and looking at her… little did she know that I was telling him I was gonna say those three words tonight! So we’re laying on our sides facing each other, and I look at her and say it! ❤️❤️❤️🥰. She looked right into my soul, smiling, and said it back in the softest, gentlest, most sincere way 🥹🥹🥹. Best night EVER!",
    title: "Said 'I love you' (and E-ball too LOL 👷🔨⚙️)"
  },

  '2024-04-04': {
    images: ['photos/4-4-1.jpg', 'photos/4-4-2.jpg', 'photos/4-4-3.jpg', 'photos/4-4-4.jpg'],
    text: "April 4, 2024: This afternoon was so sweet! I feel like we forget how we used to be a little shy around each other in the early days, and this is just such a sweet and innocent date to remember. Also thanks for giving me a driving lesson!",
    title: 'Mini Golf Date!'
  }, 

  '2024-04-17': {
    images: ['photos/4-17-1.jpg', 'photos/4-17-2.jpg'],
    text: "April 17, 2024: Need I say more??? Also your sundress was so cute!",
    title: 'First (of many!) Gardens Nights...'
  }, 

  '2024-04-26': {
    images: ['photos/4-26-1.jpg', 'photos/4-26-2.jpg', 'photos/4-26-3.jpg'],
    text: "April 26, 2024: Running around Crowell with you trying to find some privacy in the middle of the night felt like a movie baby... and then the AEPi darty after that? What a fun time! And Emily's photo's were so sweet!",
    title: 'First sleepover at Crowell + AEDarty'
  }, 

  '2024-05-27': {
    images: ['photos/5-27-1.jpg', 'photos/5-27-2.jpg', 'photos/5-27-3.jpg'],
    text: "May 27, 2024: Another magical day - paddleboading, baby turtles, amazing ice cream and breathtaking views?! Yes please! I remember seeing your face full of excitement when you saw and paddled towards the turtles; your excitement for the nature and outdoors is one of the reasons why I love you baby.",
    title: 'Paddleboarding and Ice Cream!'
  }, 

  '2024-06-01': {
    images: ['photos/6-1-1.jpg', 'photos/6-1-2.jpg', 'photos/6-1-3.jpg', 'photos/6-1-4.jpg'],
    text: "June 1, 2024: Our weekend in Norfolk! Ah, bonding with your family for the first time was amazing. And showing me around where you grew up? So rewarding! I love Norfolk!!!.",
    title: 'Weekend in Norfolk'
  }, 

  '2024-06-08': {
    images: ['photos/6-8-1.jpg', 'photos/6-8-2.jpg', 'photos/6-8-3.jpg'],
    text: "June 8, 2024: This weekend was another delight. From an amazing dinner with my parents to brunch with Mick and Cody to a fun Long Beach hangout, this was another weekend for the books!",
    title: 'Weekend in NYC' 
  }, 

  '2024-06-18': {
    images: ['photos/6-18-1.jpg', 'photos/6-18-2.jpg', 'photos/6-18-3.jpg', 'photos/6-18-4.jpg'],
    text: "June 18, 2024: This felt like our first big big milestone as a couple, and the day couldn't have gone any better! We had delicious cocktails on the balcony, and had a delicious dinner at Cucciolo's (despite that dude's butt crack... LOL)!",
    title: '3 Month Anniversary!' 
  }, 

  '2024-06-29': {
    images: ['photos/6-29-1.jpg', 'photos/6-29-2.jpg', 'photos/6-29-3.jpg'],
    text: "June 29, 2024: This was such a special date - I remember we had the best conversations in the water that day. And building the drip castle was so cool!",
    title: 'Jordan Lake' 
  }, 

  '2024-07-04': {
    images: ['photos/7-4-1.jpg', 'photos/7-4-2.jpg', 'photos/7-4-3.jpg'],
    text: "July 4, 2024: What an amazing first BIG trip we had together! I absolutely loved exploring that beautiful city with you - we both loved it sm! While we made a ton of memories that trip, the most notable one for me had to be when we sat on the swinging chair after the fireworks went off, and just talked about our future lives together and it just made me so happy and excited for what's to come.",
    title: 'July 4th in Charleston!' 
  }, 

  '2024-07-29': {
    images: ['photos/7-29-1.jpg', 'photos/7-29-2.jpg', 'photos/7-29-3.jpg'],
    text: "You planned so much for us to do when I came back to our home, and I loved every second of it! The hiking, baseball game, ice cream, Kate (LOL) - it felt like we never skipped a beat.",
    title: "July 29, 2024: Devon's Small trip to Durham" 
  }, 

  '2024-08-12': {
    images: ['photos/8-12-1.jpg', 'photos/8-12-2.jpg', 'photos/8-12-3.jpg'],
    text: "August 12, 2024: This week was also jam-packed! From some chill Long Beach days to exploring the city and even going out to the LES, it was really nice to experience things without many distractions; I feel like my parents and brother were never at the same home as us, and we just had it alllllll to ourselves haha. While saying goodbye and beginning long long distance was very difficult, I'm glad we got to do one last hurrah in the states before Paris!",
    title: 'Ella comes to the Big Apple' 
  },

  '2024-09-6': {
    images: ['photos/9-6-1.jpg', 'photos/9-6-2.jpg', 'photos/9-6-3.jpg'],
    text: "September 9, 2024: Not much to say here, but I don't want to overlook these hard months we had because it shows how strong we are. Recall our widget app countdown, facetime for hours, longing to be in each other's physical presence, having to say goodnight and good morning every day over text - that took a lot of effort, and I am so damn proud of us!",
    title: 'Some photos from distance :(' 
  }, 

  '2024-09-18': {
    images: ['photos/9-18-1.jpg', 'photos/9-18-2.jpg'],
    text: "September 18, 2024: We did the best we could with an important distance milestone - lovely dinner, thoughtful presents, and HOURS of facetime - wouldn't change a thing! ",
    title: 'Happy 6 months!' 
  }, 
  '2024-11-22': {
    images: ['photos/11-22-1.jpg', 'photos/11-22-2.jpg', 'photos/11-22-3.jpg', 'photos/11-22-4.jpg', 'photos/11-22-5.jpg'],
    text: "November 22, 2024: What. A. Time! While my damn flight got delayed, that first hug and seeing each other for the first time was one of the most wondferful moments I had ever experienced in my entire life. After so much work over long distance, we deserved every second of that trip - Versailles, croissants, hot chocolate, steak sandwiches, the Eiffel Tower (PAUSE LOL) - I could go on and on! What a wonderful trip, baby. Thanks for traveling overseas to see me!!!",
    title: 'Paris!' 
  }, 

  '2025-01-03': {
    images: ['photos/1-3-1-25.jpg', 'photos/1-3-2-25.jpg'],
    text: "January 3, 2025: What a great trip to Norfolk to celebrate the end of long distance. It all felt so magical - ice skating, seeing the Christmas lights - but my favorite part of the trip had to be going through your old scrapbooks, as it is what inspired me to make this digital calendar for us! You inspire me to be my most creative self, Ella, and I love you for that.",
    title: 'End of Distance' 
  },

  '2025-01-17': {
    images: ['photos/1-17-1-25.jpg', 'photos/1-17-2-25.jpg'],
    text: "January 17, 2025: That food was so unique and delish, and above all the ambiance was awesome! Also, your outfit was so cool - okay Tris from Abnigation! #Divergent",
    title: 'Mediterranean Dinner Date in Downtown Durham for 10 Months' 
  },

  '2025-01-22': {
    images: ['photos/1-22-1-25.jpg', 'photos/1-22-2-25.jpg'],
    text: "January 22, 2025: Our first Bid Night Shoots together! We both looked so hot, especially you with the writing on your chest...",
    title: 'BNS' 
  },

  '2025-01-25': {
    images: ['photos/1-25-1-25.jpg'],
    text: "January 25, 2025: Cheat day who??? LOL. That place was such millenial vibes but the Korean food was so busssss, we gotta go back! I remember we had some great convos about your time in South Korea.",
    title: 'Korean Dinner Date' 
  },

  '2025-01-27': {
    images: ['photos/1-27-1-25.jpg', 'photos/1-27-2-25.jpg'],
    text: "January 27, 2025: I can't believe we actually got to have a sleepover in the tent! Snuggling together in one sleeping bag was a tight squeeze, and all of the checks that night were miserable, but being with you there was such a core memory that we'll never forget.",
    title: 'Sleepover in K-Ville' 
  },

  '2025-02-14': {
    images: ['photos/2-14-1-25.jpg', 'photos/2-14-2-25.jpg', 'photos/2-14-3-25.jpg'],
    text: "February 14, 2025: What a perfect Valentine you are - the chocolates and prsents in the morning, followed by the locket in Downtown Durham and then the amazing dinner in Cary (we were both so drunk LOL), it was such a delight. Thank you so much for cheering me up after my poor test - you really turned my day around and made sure our day together wasn't ruined!",
    title: '1st Valentines Day' 
  },

  '2025-03-01': {
    images: ['photos/3-1-1-25.jpg', 'photos/3-1-2-25.jpg'],
    text: "March 1, 2025: Probably the most PDA we'll ever do at Duke, but boy was that fun. Cheering for our team while holding and kissing my baby - what's better than that? Also I love those crazy eyes of yours LOL.",
    title: 'First Duke Baskeball Game Together' 
  }, 

  '2025-03-02': {
    images: ['photos/3-2-1-25.jpg', 'photos/3-2-2-25.jpg', 'photos/3-2-3-25.jpg'],
    text: "March 2, 2025: I LOVE exploring new things with you, and that was very evident today. Talking about verious art forms - both ancient and modern - followed by having amazing sandwiches (right before they closed too!) and then stuffing our faces with ice cream, you make me feel whole, Ella, and I love you so much for that baby.",
    title: 'Art Museum and Lunch in Raleigh' 
  }

  
};

// Generate calendar from Feb 1, 2024 to Mar 31, 2025
function generateCalendar(startYear, startMonth, endYear, endMonth) {
  const startDate = new Date(startYear, startMonth, 1);
  const endDate = new Date(endYear, endMonth + 1, 0);

  let currentDate = new Date(startDate);
  let currentMonth = -1;
  let weekRow = null;

  while (currentDate <= endDate) {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const dateStr = currentDate.toISOString().split('T')[0];

    if (month !== currentMonth) {
      currentMonth = month;
      const monthTitle = document.createElement('div');
      monthTitle.className = 'month-title';
      monthTitle.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
      calendarContainer.appendChild(monthTitle);
    }

    if (currentDate.getDay() === 0 || !weekRow) {
      weekRow = document.createElement('div');
      weekRow.className = 'week-row';
      const weekLabel = document.createElement('div');
      weekLabel.className = 'week-label';
      weekLabel.textContent = `${currentDate.getMonth() + 1}/${currentDate.getDate()}`;
      weekRow.appendChild(weekLabel);
      calendarContainer.appendChild(weekRow);
    }

    const daySquare = document.createElement('div');
    daySquare.className = 'day-square';
    daySquare.textContent = currentDate.getDate();

    if (dayContent[dateStr]) {
      daySquare.classList.add('highlighted');
      daySquare.dataset.title = dayContent[dateStr].title;

      daySquare.addEventListener('click', () => {
        fullscreenImgContainer.innerHTML = '';
        dayContent[dateStr].images.forEach(src => {
          const img = document.createElement('img');
          img.src = src;
          img.className = 'fullscreen-img';
          fullscreenImgContainer.appendChild(img);
        });
        fullscreenText.textContent = dayContent[dateStr].text;
        fullscreenView.classList.add('active');
        fullscreenView.classList.remove('hidden');
      });
    }

    weekRow.appendChild(daySquare);
    currentDate.setDate(currentDate.getDate() + 1);
  }
}

generateCalendar(2024, 1, 2025, 2);

closeBtn.addEventListener('click', () => {
  fullscreenView.classList.remove('active');
  setTimeout(() => fullscreenView.classList.add('hidden'), 500);
});
