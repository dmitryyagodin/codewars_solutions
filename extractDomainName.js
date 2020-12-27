// Extract the domain name from a URL
// https://www.codewars.com/kata/514a024011ea4fb54200004b
// This is my initial solution. It is a bit cumbersome.

function domainName(url) {
    let pattern;
    if (/www\./.test(url)) {
      pattern = /\.[a-z0-9-]+/;
    } else if (/\:\/\//.test(url)) {
      pattern = /\/[a-z0-9-]+/;
    } else {
      pattern = /[a-z0-9-]+/;
      return url.match(pattern)[0];
    }
    
    let domain = url.match(pattern)[0];
    return domain.slice(1);
  }
  
  console.log(domainName("https://www.y3l84je14xsd4x6ki7-4na1s.co.za/")); // "google"
  console.log(domainName("http://google.co.jp")); //, "google"
  console.log(domainName("www.xakep.ru")); //, "xakep"
  console.log(domainName("https://youtube.com")); // "youtube"
  console.log(domainName("7vbqmstk6oht-2x.co/default.html"));
  console.log(domainName("https://owg-kfp3csgwolmlobe5zt0ai-o08.co.uk/archive/"));