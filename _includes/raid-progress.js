/**
 * That script queries Raider.IO API, grabs guild raid progress
 * and inject it in HTML elements with id mask: 'rp-[raid-name]', example:
 * <code id="rp-uldir"></code> => <code id="rp-uldir">3/8 M</code>
 */
const rioAPI = 'https://raider.io/api/v1/guilds/profile?region={{ site.raider.region }}&realm={{ site.raider.realm }}&name={{ site.raider.name }}&fields=raid_progression';
const rioHtmlBlockId = 'raid-progress';
fetch(rioAPI, {
  mode: 'cors',
  credentials: 'omit',
  redirect: 'follow',
  referrerPolicy: 'origin-when-cross-origin',
  headers: {
    'Content-Type': 'application/json'
  }
}).then((response) => {
  if(!response.ok) {
    throw new Error('API request to Raider.io failed');
  }

  return response.json();
}).then((data) => {
  const rp = data.raid_progression;
  for(const raid in rp) {
    if(!rp.hasOwnProperty(raid)) {
      continue;
    }
    let element = document.getElementById('rp-' + raid);
    if(!element) {
      continue;
    }
    element.innerHTML = rp[raid].summary;
  }
  document.getElementById(rioHtmlBlockId).style.visibility = 'visible';
}).catch((error) => console.error('There has been a problem with your fetch operation:', error));
