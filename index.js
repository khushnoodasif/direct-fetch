  // Function to handle the search
  function startSearch() {
    // Get the values from the form
    var query = document.getElementById('searchQuery').value;
    var fileType = document.getElementById('fileTypeDropdown').value;
    var engine = document.getElementById('engineDropdown').value;

    // Construct the search query based on the selected fileType
    var finalQuery = (fileType === "all") ? 
      `${query} -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)` :
      `${query} +(${fileType}) -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)`;

    // Construct the URL based on the selected search engine
    var url = '';
    switch(engine) {
      case 'yahoo':
        url = `https://search.yahoo.com/search?p=${encodeURIComponent(finalQuery)}`;
        break;
      case 'bing':
        url = `https://www.bing.com/search?q=${encodeURIComponent(finalQuery)}`;
        break;
      case 'duckduckgo':
        url = `https://duckduckgo.com/?q=${encodeURIComponent(finalQuery)}`;
        break;
      case 'google':
        url = `https://www.google.com/search?q=${encodeURIComponent(finalQuery)}`;
        break;
      case 'googol':
        url = `https://googol.warriordudimanche.net/?q=${encodeURIComponent(finalQuery)}`;
        break;
      case 'startpage':
        url = `https://www.startpage.com/do/dsearch?query=${encodeURIComponent(finalQuery)}`;
        break;
      case 'searx':
        url = `https://searx.me/?q=${encodeURIComponent(finalQuery)}`;
        break;
      case 'filepursuit':
        url = `https://filepursuit.com/search/${query.replace(/ /g,"+")}/type/${fileType}`;
        break;
    }

    // Open the URL in a new tab
    window.open(url, '_blank');
  }

  // Add event listener to the form to handle submission
  document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    startSearch();
  });