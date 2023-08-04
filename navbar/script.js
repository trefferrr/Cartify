function Navbar(){
    return `<body>
    <div id="navbar">
      <div id="navbarlogo">
        <a href="index.html" style><img id="logo1"src="img/features/images.png" onclick="home1()" style="height:55px;"> </a>
      </div>
    </div>
    <!-- Men's page -->
      <div class="dropdown" style="background-color:white">
        <a href="mens.html"><button class="dropbtn" id="MENSPAGE" >MEN</button></a>
        <div class="dropdown-content" id="Subway" style="background-color:white">
    
          <div>
            <div id="topwear">
              <p class="subhead">Topwear</p>
              <button class="sub1"  >T-shirts</button> <br>
              <button class="sub1"  >Casual Shirts</button><br>
              <button class="sub1"  >Formal Shirts</button><br>
              <button class="sub1"  >Sweatshirts</button><br>
              <button class="sub1"  >Sweaters</button><br>
              <button class="sub1"  >Jackets</button><br>
              <button class="sub1"  >Blazer & Coats</button><br>
              <button class="sub1"  >Suits</button><br>
              <button class="sub1"  >Rain Jackets</button><br>
            </div>
           
            <div id="indian">
              <p class="subhead">Indian Kurta Sets</p>
              <button class="sub1"  >Kurta Kurta Sets</button><br>
              <button class="sub1"  >Sherwanis</button><br>
              <button class="sub1"  >Nehru Jackets</button><br>
              <button class="sub1"  >Dhotis</button>
            </div>
          </div>
      
        
          <div>
            <div id="bottomwear">
              <p class="subhead">Bottomwear</p>
              <button class="sub1"  >Jeans</button>
              <br>
              <button class="sub1"  >Casual Trousers</button>
              <button class="sub1"  >Formal Trousers</button>
              <button class="sub1"  >Shorts</button>
              <button class="sub1"  >Track Pants &Joggers</button>
            </div>
            <div id="innerwear">
              <p class="subhead">Innerwear & Sleepwear</p>
              <button class="sub1"  >Briefs & Trunks</button>
              <br>
              <button class="sub1"  >Boxers</button>
              <br>
              <button class="sub1"  >Vests</button>
              <button class="sub1"  >Sleepwear & Loungewear</button>
              <button class="sub1"  >Thermals</button>
            </div>
            <div id="plus1">
              <p class="subhead">Plus Size</p>
            </div>
          </div>

            <div>
                <div id="footwear">
                  <p class="subhead">Footwear</p>
                  <button class="sub1"  >Briefs & Trunks</button>
                  <br>
                  <button class="sub1"  >Boxers</button>
                  <br>
                  <button class="sub1"  >Vests</button>
                  <button class="sub1"  >Sleepwear & Loungewear</button>
                  <button class="sub1"  >Thermals</button>
                  <button class="sub1"  >Suits</button>
                  <button class="sub1"  >Rain Jackets</button>
                </div>
                <div id="personal">
                  <p class="subhead">Personal Care & Grooming</p>
                </div>
                <div id="sunglass1">
                  <p class="subhead">Sunglass & Frames</p>
                </div>
                <div id="watches1">
                  <p class="subhead">Watches</p>
                </div>
            </div>

            <div>
                <div id="sports">
                  <p class="subhead">Sports & Active Wear</p>
                  <button class="sub1"  >Sports Shoes</button>
                  <button class="sub1"  >Sports Sandals</button>
                  <button class="sub1"  >Active T-Shirts</button>
                  <button class="sub1"  >Track Pants & Shorts</button>
                  <button class="sub1"  >Tracksuits</button>
                  <button class="sub1"  >Jackets & Sweeatshirts</button>
                  <button class="sub1"  >Sports Accessories</button>
                  <button class="sub1"  >Swimwear</button>
                </div>
                <div id="gadgets">
                  <p class="subhead">Gadgets</p>
                  <button class="sub1"  >Smart Wearables</button>
                  <button class="sub1"  >Fitness Gadgets</button>
                  <button class="sub1"  >Headphones</button>
                  <button class="sub1"  >Speakers</button>
                </div>
      
            </div>

            <div>
              <div id="fashion">
                <p class="subhead">Fashion Accessories</p>
                <button class="sub1"  >Wallets</button>
                <br>
                <button class="sub1"  >Belts</button>
                <br>
                <button class="sub1"  >Perfumes & Body Mists</button>
                <br>
                <button class="sub1"  >Trimmers &</button>
                <button class="sub1"  >Deodorants</button>
                <button class="sub1"  >Ties & Pocket Squares</button>
                <button class="sub1"  >Caps & Hats</button>
                <button class="sub1"  >Mufflers,Scarves&Gloves</button>
                <button class="sub1"  >Accessory Gift Sets</button>
                <br>
                <button class="sub1"  >Phone Cases</button>
                <br>
                <button class="sub1"  >Rings & Wristwear</button>
                <br>
                <button class="sub1"  >Helmets</button>
              </div>
              <div id="personal">
                <p class="subhead">Bags & Backpacks</p>
              </div>
              <div id="sunglass1">
                <p class="subhead">Luggages & Trooleys</p>
              </div>
            </div>
        
          </div>
      
        </div>
        
        </div>
    <!-- Women page -->
      <div class="dropdown">
      <a href="womenhome.html"><button class="dropbtnW" id="Womenpage">WOMEN</button></a>
        <div class="dropdown-content" id="Subway1">
            <div>
              <div id="topwear">
                <p class="subheadW">Indian Wear</p>
                <button class="sub1"  >Kuras &Suits</button><br>
                <button class="sub1"  >Kurtis,Tunics</button><br>
                <button class="sub1"  >Ethnic Wear</button><br>
                <button class="sub1"  >Leggings</button><br>
                <button class="sub1"  >Dress Materials</button><br>
                <button class="sub1"  >Lahenga Cholis</button><br>
                <button class="sub1"  >Dupattas & Shawls</button><br>
                <button class="sub1"  >Suits</button><br>
                <button class="sub1"  >Jackets</button><br>
              </div>
             
              <div id="indian">
                <p class="subheadW">Indian Kurta Sets</p>
                <button class="sub1"  >Kurta Kurta Sets</button>
                <button class="sub1"  >Sherwanis</button>
                <button class="sub1"  >Nehru Jackets</button>
                <button class="sub1"  >Dhotis</button>
              </div>
            </div>
        
        
            <div>
              <div id="bottomwear">
                <p class="subheadW">Bottomwear</p>
                <button class="sub1"  >Jeans</button>
                <br>
                <button class="sub1"  >Casual Trousers</button>
                <button class="sub1"  >Formal Trousers</button>
                <button class="sub1"  >Shorts</button>
                <button class="sub1"  >Track Pants &Joggers</button>
              </div>
              <div id="innerwear">
                <p class="subheadW">Innerwear & Sleepwear</p>
                <button class="sub1"  >Briefs & Trunks</button>
                <br>
                <button class="sub1"  >Boxers</button>
                <br>
                <button class="sub1"  >Vests</button>
                <button class="sub1"  >Sleepwear & Loungewear</button>
                <button class="sub1"  >Thermals</button>
              </div>
              <div id="plus1">
                <p class="subheaW">Plus Size</p>
              </div>
              </div>
        
              <div>
                  <div id="footwear">
                    <p class="subheadW">Footwear</p>
                    <button class="sub1"  >Briefs & Trunks</button>
                    <br>
                    <button class="sub1"  >Boxers</button>
                    <br>
                    <button class="sub1"  >Vests</button>
                    <button class="sub1"  >Sleepwear & Loungewear</button>
                    <button class="sub1"  >Thermals</button>
                    <button class="sub1"  >Suits</button>
                    <button class="sub1"  >Rain Jackets</button>
                  </div>
                  <div id="personal">
                    <p class="subheadW">Personal Care & Grooming</p>
                  </div>
                  <div id="sunglass1">
                    <p class="subheadW">Sunglass & Frames</p>
                  </div>
                  <div id="watches1">
                    <p class="subheadW">Watches</p>
                  </div>
              </div>
        
              <div>
                  <div id="sports">
                    <p class="subheadW">Sports & Active Wear</p>
                    <button class="sub1"  >Sports Shoes</button>
                    <button class="sub1"  >Sports Sandals</button>
                    <button class="sub1"  >Active T-Shirts</button>
                    <button class="sub1"  >Track Pants & Shorts</button>
                    <button class="sub1"  >Tracksuits</button>
                    <button class="sub1"  >Jackets & Sweeatshirts</button>
                    <button class="sub1"  >Sports Accessories</button>
                    <button class="sub1"  >Swimwear</button>
                  </div>
                  <div id="gadgets">
                    <p class="subheadW">Gadgets</p>
                    <button class="sub1"  >Smart Wearables</button>
                    <button class="sub1"  >Fitness Gadgets</button>
                    <button class="sub1"  >Headphones</button>
                    <button class="sub1"  >Speakers</button>
                  </div>
        
              </div>
        
              <div>
                <div id="fashion">
                  <p class="subheadW">Fashion Accessories</p>
                  <button class="sub1"  >Wallets</button>
                  <br>
                  <button class="sub1"  >Belts</button>
                  <br>
                  <button class="sub1"  >Perfumes & Body Mists</button>
                  <br>
                  <button class="sub1"  >Trimmers &</button>
                  <button class="sub1"  >Deodorants</button>
                  <button class="sub1"  >Ties & Pocket Squares</button>
                  <button class="sub1"  >Caps & Hats</button>
                  <button class="sub1"  >Mufflers,Scarves&Gloves</button>
                  <button class="sub1"  >Accessory Gift Sets</button>
                  <br>
                  <button class="sub1"  >Phone Cases</button>
                  <br>
                  <button class="sub1"  >Rings & Wristwear</button>
                  <br>
                  <button class="sub1"  >Helmets</button>
                </div>
                <div id="personal">
                  <p class="subheadW">Bags & Backpacks</p>
                </div>
                <div id="sunglass1">
                  <p class="subheadW">Luggages & Trooleys</p>
                </div>
              </div>
            </div>
      
        </div>
       <!-- Kids page -->
      </div>
      <div class="dropdown">
       <a href="kids.html"><button class="dropbtnK" id="kidspage" >KIDS</button></a>
        <div class="dropdown-content" id="Subway2">
      
          <div>
            <div id="topwear">
              <p class="subheadK">Boys Clothing</p>
              <button class="sub1"  >T-shirts</button><br>
              <button class="sub1"  >Shirts</button><br>
              <button class="sub1"  >Shorts</button><br>
              <button class="sub1"  >Jeans</button><br>
              <button class="sub1"  >Trousers</button><br>
              <button class="sub1"  >Clothing Sets</button><br>
              <button class="sub1"  >Ethnic Sets</button><br>
              <button class="sub1"  >Track Pants</button><br>
              <button class="sub1"  >Jackets</button><br>
            </div>
           
            <div id="indian">
              <p class="subheadK">Indian Kurta Sets</p>
              <button class="sub1"  >Kurta Kurta Sets</button>
              <button class="sub1"  >Sherwanis</button>
              <button class="sub1"  >Nehru Jackets</button>
              <button class="sub1"  >Dhotis</button>
            </div>
          </div>
      
      
          <div>
            <div id="bottomwear">
              <p class="subheadK">Bottomwear</p>
              <button class="sub1"  >Jeans</button>
              <br>
              <button class="sub1"  >Casual Trousers</button>
              <button class="sub1"  >Formal Trousers</button>
              <button class="sub1"  >Shorts</button>
              <button class="sub1"  >Track Pants &Joggers</button>
            </div>
            <div id="innerwear">
              <p class="subheadK">Innerwear & Sleepwear</p>
              <button class="sub1"  >Briefs & Trunks</button>
              <br>
              <button class="sub1"  >Boxers</button>
              <br>
              <button class="sub1"  >Vests</button>
              <button class="sub1"  >Sleepwear & Loungewear</button>
              <button class="sub1"  >Thermals</button>
            </div>
            <div id="plus1">
              <p class="subheadK">Plus Size</p>
            </div>
            </div>
      
            <div>
                <div id="footwear">
                  <p class="subheadK">Footwear</p>
                  <button class="sub1"  >Briefs & Trunks</button>
                  <br>
                  <button class="sub1"  >Boxers</button>
                  <br>
                  <button class="sub1"  >Vests</button>
                  <button class="sub1"  >Sleepwear & Loungewear</button>
                  <button class="sub1"  >Thermals</button>
                  <button class="sub1"  >Suits</button>
                  <button class="sub1"  >Rain Jackets</button>
                </div>
                <div id="personal">
                  <p class="subheadK">Personal Care & Grooming</p>
                </div>
                <div id="sunglass1">
                  <p class="subheadK">Sunglass & Frames</p>
                </div>
                <div id="watches1">
                  <p class="subheadK">Watches</p>
                </div>
            </div>
      
            <div>
                <div id="sports">
                  <p class="subheadK">Sports & Active Wear</p>
                  <button class="sub1"  >Sports Shoes</button>
                  <button class="sub1"  >Sports Sandals</button>
                  <button class="sub1"  >Active T-Shirts</button>
                  <button class="sub1"  >Track Pants & Shorts</button>
                  <button class="sub1"  >Tracksuits</button>
                  <button class="sub1"  >Jackets & Sweeatshirts</button>
                  <button class="sub1"  >Sports Accessories</button>
                  <button class="sub1"  >Swimwear</button>
                </div>
                <div id="gadgets">
                  <p class="subheadK">Gadgets</p>
                  <button class="sub1"  >Smart Wearables</button>
                  <button class="sub1"  >Fitness Gadgets</button>
                  <button class="sub1"  >Headphones</button>
                  <button class="sub1"  >Speakers</button>
                </div>
      
            </div>
      
            <div>
              <div id="fashion">
                <p class="subheadK">Fashion Accessories</p>
                <button class="sub1"  >Wallets</button>
                <br>
                <button class="sub1"  >Belts</button>
                <br>
                <button class="sub1"  >Perfumes & Body Mists</button>
                <br>
                <button class="sub1"  >Trimmers &</button>
                <button class="sub1"  >Deodorants</button>
                <button class="sub1"  >Ties & Pocket Squares</button>
                <button class="sub1"  >Caps & Hats</button>
                <button class="sub1"  >Mufflers,Scarves&Gloves</button>
                <button class="sub1"  >Accessory Gift Sets</button>
                <br>
                <button class="sub1"  >Phone Cases</button>
                <br>
                <button class="sub1"  >Rings & Wristwear</button>
                <br>
                <button class="sub1"  >Helmets</button>
              </div>
              <div id="personal">
                <p class="subheadK">Bags & Backpacks</p>
              </div>
              <div id="sunglass1">
                <p class="subheadK">Luggages & Trooleys</p>
              </div>
            </div>
            
          </div>
      
        </div>
      </div>
    
    
    
      <div class="dropdown">
        <button class="dropbtnH" id="homeliving" >HOME & LIVING</button>
        <div class="dropdownHomeLiving" id="Subway3"  >
      
          <div>
            <div id="topwear">
              <p class="subheadH">Bed Linen &Furnishing</p>
              <button class="sub1" >Bedsheets</button><br>
              <button class="sub1" >Bedding Sets</button><br>
              <button class="sub1" >Blankets & Dohars</button><br>
              <button class="sub1" >pillows</button><br>
              <button class="sub1" >Bed Covers</button><br>
              <button class="sub1" >Diwan Sets</button><br>
              <button class="sub1" >Chair Pads & Covers</button><br>
              <button class="sub1" >Sofa Covers</button><br>
              <button class="sub1" >Pillow Covers</button><br>
            </div>
           
            <div id="indian">
              <p class="subheadH">Flooring</p>
              <button class="sub1" >Carpets</button><br>
              <button class="sub1" >Floor Mats</button><br>
              <button class="sub1" >Dhurries</button><br>
              <button class="sub1" >Door Mats</button><br>
            </div>
          </div>
      
      
          <div>
            <div id="bottomwear">
              <p class="subheadH">Bottomwear</p>
              <button class="sub1" >Jeans</button>
              <br>
              <button class="sub1" >Casual Trousers</button>
              <button class="sub1" >Formal Trousers</button>
              <button class="sub1" >Shorts</button>
              <button class="sub1" >Track Pants &Joggers</button>
            </div>
            <div id="innerwear">
              <p class="subheadH">Innerwear & Sleepwear</p>
              <button class="sub1" >Briefs & Trunks</button>
              <br>
              <button class="sub1" >Boxers</button>
              <br>
              <button class="sub1" >Vests</button>
              <button class="sub1" >Sleepwear & Loungewear</button>
              <button class="sub1" >Thermals</button>
            </div>
            <div id="plus1">
              <p class="subheadH">Plus Size</p>
            </div>
            </div>
      
            <div>
                <div id="footwear">
                  <p class="subheadH">Footwear</p>
                  <button class="sub1" >Briefs & Trunks</button>
                  <br>
                  <button class="sub1" >Boxers</button>
                  <br>
                  <button class="sub1" >Vests</button>
                  <button class="sub1" >Sleepwear & Loungewear</button>
                  <button class="sub1" >Thermals</button>
                  <button class="sub1" >Suits</button>
                  <button class="sub1" >Rain Jackets</button>
                </div>
                <div id="personal">
                  <p class="subheadH">Personal Care & Grooming</p>
                </div>
                <div id="sunglass1">
                  <p class="subheadH">Sunglass & Frames</p>
                </div>
                <div id="watches1">
                  <p class="subheadH">Watches</p>
                </div>
            </div>
      
            <div>
                <div id="sports">
                  <p class="subheadH">Sports & Active Wear</p>
                  <button class="sub1" >Sports Shoes</button>
                  <button class="sub1" >Sports Sandals</button>
                  <button class="sub1" >Active T-Shirts</button>
                  <button class="sub1" >Track Pants & Shorts</button>
                  <button class="sub1" >Tracksuits</button>
                  <button class="sub1" >Jackets & Sweeatshirts</button>
                  <button class="sub1" >Sports Accessories</button>
                  <button class="sub1" >Swimwear</button>
                </div>
                <div id="gadgets">
                  <p class="subheadH">Gadgets</p>
                  <button class="sub1" >Smart Wearables</button>
                  <button class="sub1" >Fitness Gadgets</button>
                  <button class="sub1" >Headphones</button>
                  <button class="sub1" >Speakers</button>
                </div>
      
            </div>
      
            <div>
              <div id="fashion">
                <p class="subheadH">Fashion Accessories</p>
                <button class="sub1" >Wallets</button>
                <br>
                <button class="sub1" >Belts</button>
                <br>
                <button class="sub1" >Perfumes & Body Mists</button>
                <br>
                <button class="sub1" >Trimmers</button>
                <button class="sub1" >Deodorants</button>
                <button class="sub1" >Ties & Pocket Squares</button>
                <button class="sub1" >Caps & Hats</button>
                <button class="sub1" >Mufflers,Scarves&Gloves</button>
                <button class="sub1" >Accessory Gift Sets</button>
                <br>
                <button class="sub1" >Phone Cases</button>
                <br>
                <button class="sub1" >Rings & Wristwear</button>
                <br>
                <button class="sub1" >Helmets</button>
              </div>
              <div id="personal">
                <p class="subheadH">Bags & Backpacks</p>
              </div>
              <div id="sunglass1">
                <p class="subheadH">Luggages & Trooleys</p>
              </div>
            </div>
            
          </div>
      
        </div>
      
        
      </div>
      <div class="dropdown">
        <button class="dropbtnB" id="beautypage" >BEAUTY</button>
        <div class="dropdownBeauty" id="Subway4">
      
          <div>
            <div id="topwear">
              <p class="subheadB">Makeup</p>
              <button class="sub1" >Lipstick</button><br>
              <button class="sub1" >Lip Gloss</button><br>
              <button class="sub1" >Lip Liner</button><br>
              <button class="sub1" >Mascara</button><br>
              <button class="sub1" >Eyeliner</button><br>
              <button class="sub1" >Kajal</button><br>
              <button class="sub1" >Eyeshadow</button><br>
              <button class="sub1" >Foundation</button><br>
              <button class="sub1" >Primer</button><br>
            </div>
           
            <div id="indian">
              <p class="subheadB">Fragrances</p>
              <button class="sub1" >Perfume</button><br>
              <button class="sub1" >Deodrants</button><br>
              <button class="sub1" >Roll on</button><br>
              <button class="sub1" >Body Mist</button><br>
            </div>
          </div>
      
      
          <div>
            <div id="bottomwear">
              <p class="subheadB">Bottomwear</p>
              <button class="sub1" >Jeans</button>
              <br>
              <button class="sub1" >Casual Trousers</button>
              <button class="sub1" >Formal Trousers</button>
              <button class="sub1" >Shorts</button>
              <button class="sub1" >Track Pants &Joggers</button>
            </div>
            <div id="innerwear">
              <p class="subheadB">Innerwear & Sleepwear</p>
              <button class="sub1" >Briefs & Trunks</button>
              <br>
              <button class="sub1" >Boxers</button>
              <br>
              <button class="sub1" >Vests</button>
              <button class="sub1" >Sleepwear & Loungewear</button>
              <button class="sub1" >Thermals</button>
            </div>
            <div id="plus1">
              <p class="subheadB">Plus Size</p>
            </div>
            </div>
      
            <div>
                <div id="footwear">
                  <p class="subheadB">Footwear</p>
                  <button class="sub1" >Briefs & Trunks</button>
                  <br>
                  <button class="sub1" >Boxers</button>
                  <br>
                  <button class="sub1" >Vests</button>
                  <button class="sub1" >Sleepwear & Loungewear</button>
                  <button class="sub1" >Thermals</button>
                  <button class="sub1" >Suits</button>
                  <button class="sub1" >Rain Jackets</button>
                </div>
                <div id="personal">
                  <p class="subheadB">Personal Care & Grooming</p>
                </div>
                <div id="sunglass1">
                  <p class="subheadB">Sunglass & Frames</p>
                </div>
                <div id="watches1">
                  <p class="subheadB">Watches</p>
                </div>
            </div>
      
            <div>
                <div id="sports">
                  <p class="subheadB">Sports & Active Wear</p>
                  <button class="sub1" >Sports Shoes</button>
                  <button class="sub1" >Sports Sandals</button>
                  <button class="sub1" >Active T-Shirts</button>
                  <button class="sub1" >Track Pants & Shorts</button>
                  <button class="sub1" >Tracksuits</button>
                  <button class="sub1" >Jackets & Sweeatshirts</button>
                  <button class="sub1" >Sports Accessories</button>
                  <button class="sub1" >Swimwear</button>
                </div>
                <div id="gadgets">
                  <p class="subheadB">Gadgets</p>
                  <button class="sub1" >Smart Wearables</button>
                  <button class="sub1" >Fitness Gadgets</button>
                  <button class="sub1" >Headphones</button>
                  <button class="sub1" >Speakers</button>
                </div>
      
            </div>
      
            <div>
              <div id="fashion">
                <p class="subheadB">Fashion Accessories</p>
                <button class="sub1" >Wallets</button>
                <br>
                <button class="sub1" >Belts</button>
                <br>
                <button class="sub1" >Perfumes & Body Mists</button>
                <br>
                <button class="sub1" >Trimmers</button>
                <button class="sub1" >Deodorants</button>
                <button class="sub1" >Ties & Pocket Squares</button>
                <button class="sub1" >Caps & Hats</button>
                <button class="sub1" >Mufflers,Scarves&Gloves</button>
                <button class="sub1" >Accessory Gift Sets</button>
                <br>
                <button class="sub1" >Phone Cases</button>
                <br>
                <button class="sub1" >Rings & Wristwear</button>
                <br>
                <button class="sub1" >Helmets</button>
              </div>
              <div id="personal">
                <p class="subheadB">Bags & Backpacks</p>
              </div>
              <div id="sunglass1">
                <p class="subheadB">Luggages & Trooleys</p>
              </div>
            </div>
           </div>
           
          </div>
      
         </div>
      </div>
      
      <!--studio page  -->
      <div class="dropdown1">
          <button class="dropbtn1" style="color:black">CARTIFY</button>
          <div class="dropdown1-content">
         <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
          <button id="studiobtn" style="height:0px; width:0px"></button>
        
          </div>
          </div>

    
    <!-- myntra search -->
      <img id="searchimg" src="data:image/png;base64,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" alt="">
      <input id="input1" type="text" placeholder="Search for products,brands and more">
    <!-- signup -->
    <div id="details2">
      <div class="dropdownP">
        <img id="profi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-oYBJgcWpBfjaS1rQAwYZS5px0eeZ0g4rw&usqp=CAU" alt="">
        <button class="dropbtnP">Profile</button>
        <div class="dropdownP-content profileDropdown" >
          <div>
            <div style="line-height: 1px;" class="profileHeading">
              <p style="margin-left: 20px;color: #282c3f" >Welcome</p>
              <p>To access account and manage orders</p>
            </div>
            
            <br>
           <div id="loginButton">
            <button id="loginnav"
            style="border: 1px solid #afb1b7"
             onMouseOver="this.style.border='1px solid red'"
             onMouseOut="this.style.border='1px solid #afb1b7'">LOGIN/SIGNUP</button>
            </div>
            <br>
            <br>
            <br>
            <div id="details3">
              <button class="navbarButtons " >Orders</button>
                  <br>
                  <button class="navbarButtons " >Wishlist</button>
                  <br>
                  <button class="navbarButtons " >Gift Cards</button>
                  <br>
                  <button class="navbarButtons " >Contact Us</button>
                  <br>
                  <button class="navbarButtons " >CARTIFY Insider <sup style="color: white;background-color: red;">New</sup></button>
                  <br>
                  <br>
                  <br>
                  <button class="navbarButtons " >CARTIFY Credit</button>
                  <br>
                  <button class="navbarButtons " >Coupons</button>
                  <br>
                  <button class="navbarButtons " >Saved Cards</button>
            </div>
                  
          </div>
          </div>
        </div>
    </div>
      
        <div id="details" >
          <img id="wish" src="data:image/png;base64,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" alt="">
          <button id="wishlistpage" style="background-color:white">Wishlist</button>
        </div>
        <div id="details1">
          <img id="bag" src="data:image/png;base64,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" alt="">
          <button style="background-color:white">Bag</button>
        </div>
        <div class="cartCounts"></div>
    
    </body>`
}
export {Navbar};