// database.js
const playerList = [
    {
        name: "zombiegroan1",
        riskLevel: "Unknown",
        cheats: "Unknown",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/1830543210/profile"
    },
    {
        name: "zombiegroan3",
        riskLevel: "Unknown",
        cheats: "Unknown",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/1454821643/profile"
    },
    {
        name: "kingwafoko1",
        riskLevel: "Unknown",
        cheats: "Tier I",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/1210631099/profile"
    },
    {
        name: "e0hg35n_bj0996y2",
        riskLevel: "Low",
        cheats: "Tier I",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/3795922848/profile"
    },
    {
        name: "KaKaExplosive",
        riskLevel: "Medium",
        cheats: "Tier II",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/1330762084/profile"
    },
    {
        name: "wearingnikeshorts",
        riskLevel: "Low",
        cheats: "Tier I",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/4758090788/profile"
    },
    {
        name: "ScarzIsCute",
        riskLevel: "Low",
        cheats: "Tier I",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/1633338035/profile"
    },
    {
        name: "hacxerdude6",
        riskLevel: "Low",
        cheats: "Tier I",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/2763304874/profile"
    },
    {
        name: "BroThinksHesBatmanL",
        riskLevel: "Low",
        cheats: "Tier I",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/4881268645/profile"
    },
    {
        name: "Driftingguy13",
        riskLevel: "Medium",
        cheats: "Tier II",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/2267783326/profile"
    },
    {
        name: "ApocAimGod",
        riskLevel: "High",
        cheats: "Tier III",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/4870104121/profile"
    },
    {
        name: "popsicleprincessOO",
        riskLevel: "High",
        cheats: "Tier III",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/1432709200/profile"
    },
    {
        name: "Whodoyouknowiknowyou",
        riskLevel: "High",
        cheats: "Tier III",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/2930921631/profile"
    },
    {
        name: "DarkyFear",
        riskLevel: "High",
        cheats: "Tier III",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/202830362/profile"
    },
    {
        name: "aleliuj27",
        riskLevel: "High",
        cheats: "Tier III",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/4853485259/profile"
    },
    {
        name: "ADIANCLAnNEALAND_294",
        riskLevel: "High",
        cheats: "Tier III",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/4837379148/profile"
    },
    {
        name: "Cladman228x",
        riskLevel: "Medium",
        cheats: "Tier II",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/4881112073/profile"
    },
    {
        name: "HereIamAgain5",
        riskLevel: "High",
        cheats: "Tier III",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/4881252156/profile"
    },
    {
        name: "shroomdoomofloom",
        riskLevel: "Severe",
        cheats: "Tier IV",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/4876230454/profile"
    },
    {
        name: "Banwoods",
        riskLevel: "Unknown",
        cheats: "Unknown",
        gamesPlayed: "Unknown",
        profileLink: "https://www.roblox.com/users/1856694977/profile"
    },
    {
        name: "superdemondragon",
        riskLevel: "Severe",
        cheats: "Tier IV",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/501653200/profile"
    },
    {
        name: "d_wkin",
        riskLevel: "Unknown",
        cheats: "Tier II",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/95933654/profile"
    },
    {
        name: "ScadoliSmoka",
        riskLevel: "Low",
        cheats: "Tier I",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/2375368228/profile"
    },
    {
        name: "Fireblister1234",
        riskLevel: "Unknown",
        cheats: "Unknown",
        gamesPlayed: "New",
        profileLink: "https://www.roblox.com/users/3714614794/profile"
    },
    {
        name: "swagster8o",
        riskLevel: "Unknown",
        cheats: "Tier II",
        gamesPlayed: "Old",
        profileLink: "https://www.roblox.com/users/1571607270/profile"
    },
    {
      name: "nicokvarashelia",
      riskLevel: "Medium",
      cheats: "Tier II",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4888737153/profile"
    },
    {
      name: "ApocMasterZ17",
      riskLevel: "Unknown",
      cheats: "Tier III",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/619970789/profile"
    },
    {
      name: "cuterahaul",
      riskLevel: "Unknown",
      cheats: "Tier II",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/50354322/profile"
    },
    {
      name: "uni123207",
      riskLevel: "High",
      cheats: "Tier II",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1884398612/profile"
    },
    {
      name: "noodlesndoodlesOO",
      riskLevel: "High",
      cheats: "Tier III",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1328398743/profile"
    },
    {
      name: "ParadiseLost95",
      riskLevel: "Unknown",
      cheats: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1779257758/profile"
    },
    {
      name: "8BitLive",
      riskLevel: "Unknown",
      cheats: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1767541234/profile"
    },
    {
      name: "RacoonPossum",
      riskLevel: "Unknown",
      cheats: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1821887002/profile"
    },
    {
      name: "Apoc1_SCARL",
      riskLevel: "High",
      cheats: "Tier III",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4875864359/profile"
    },
    {
      name: "Relyxx",
      riskLevel: "Unknown",
      cheats: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/32905446/profile"
    },
    {
      name: "jmylguia",
      riskLevel: "Unknown",
      cheats: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4890822331/profile"
    },
    {
      name: "XXXANUNAKI1",
      riskLevel: "Unknown",
      cheats: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4892718880/profile"
    },
    {
      name: "XOXU101",
      riskLevel: "Unknown",
      cheats: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4892726752/profile"
    },
    {
      name: "Apocs_F1nest",
      riskLevel: "Low",
      cheats: "Tier I",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4892885327/profile"
    },
    {
      name: "fgffrtfgfgfgfg",
      riskLevel: "Unknown",
      cheats: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/3979648750/profile"
    },
    {
      name: "TiberiumWolfAlt",
      riskLevel: "High",
      cheats: "Tier III",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4894342557/profile"
    },
    {
      name: "TiberiumWolf",
      riskLevel: "Unknown",
      cheats: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/30763488/profile"
    },
    {
      name: "therealthughunter5",
      riskLevel: "Unknown",
      cheats: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/4894059186/profile"
    },
    {
      name: "Guspenpen",
      riskLevel: "Unknown",
      cheats: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/296260654/profile"
    },
    {
      name: "Blinking_Issues",
      riskLevel: "Unknown",
      cheats: "Unknown",
      gamesPlayed: "Old",
      profileLink: "https://www.roblox.com/users/1072841489/profile"
    },
    // Add more player objects as needed...
  ];
  
  // Function to create and populate the table
  // Function to create and populate the table
  function createTable() {
    const table = document.querySelector("#player-table table");
    const header = table.createTHead();
    const headerRow = header.insertRow();
  
    // Table Header
    const headers = ["Risk", "Username", "Cheat(s)", "Game(s)", "Profile"];
    headers.forEach(headerText => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
  
    // Clear existing table rows
    const tbody = table.querySelector("tbody");
    if (tbody) {
      tbody.remove();
    }
    const newTbody = document.createElement("tbody");
    table.appendChild(newTbody);
  
    // Sort playerList alphabetically based on names
    playerList.sort((a, b) => a.name.localeCompare(b.name));
  
    playerList.forEach(player => {
      const row = newTbody.insertRow();
  
      // Create and add the risk level text box
      const riskCell = row.insertCell();
      const riskBox = document.createElement("div");
      riskBox.textContent = player.riskLevel;
      riskBox.classList.add("risk-box");
  
      // Add a class for the risk level based on its name
      riskBox.classList.add(player.riskLevel.toLowerCase());
  
      // Add event listener to navigate to levels.html on risk box clic
  
      riskCell.appendChild(riskBox);
  
      const nameCell = row.insertCell();
      nameCell.textContent = player.name;
  
      const cheatsCell = row.insertCell();
      cheatsCell.textContent = player.cheats;
  
      const gamesCell = row.insertCell();
      gamesCell.textContent = player.gamesPlayed;
  
      const profileCell = row.insertCell();
      const profileLink = document.createElement("a");
      profileLink.textContent = "Profile";
      profileLink.href = player.profileLink; // Set the href to the player's profile link
      profileLink.target = "_blank"; // Open the link in a new tab
      profileCell.appendChild(profileLink);
    });
  }
  
  
  // Function to get the color based on the risk level
  function getRiskLevelColor(riskLevel) {
    switch (riskLevel) {
      case "Unknown":
        return "#427898"; // Blue
      case "Low":
        return "#008000"; // Green
      case "Medium":
        return "#FFA500"; // Orange
      case "High":
        return "#FF0000"; // Red
      case "Severe":
        return "#800000"; // Maroon
      default:
        return "#808080"; // Default to Grey for unknown risk levels
    }
  }
  
  // Function to filter the table based on the search term
  function filterTable(searchTerm) {
    const table = document.querySelector("#player-table table");
    const rows = table.getElementsByTagName("tr");
  
    for (let i = 1; i < rows.length; i++) {
      const name = rows[i].getElementsByTagName("td")[1].textContent.toLowerCase();
      if (name.includes(searchTerm.toLowerCase())) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
  
  // Call the function to create the table initially
  createTable();
  
  // Add event listener to the search input
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim();
    filterTable(searchTerm);
  });
  
  document.getElementById('menuToggle').addEventListener('click', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuContainer = document.getElementById('menuContainer');
  
    // Toggle the 'active' class on the hamburger icon
    menuToggle.classList.toggle('active');
  
    // Toggle the visibility of the menu container
    menuContainer.classList.toggle('hide');
  });
  
