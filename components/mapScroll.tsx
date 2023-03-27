import { Stack, HStack, VStack, Box, Text, Container, Link } from '@chakra-ui/react'
import data from '../data/richmonddata.json';


const ScrollItem = ({ children, ...props }) => {
  return (
    <Container
      p={2}
      boxShadow='outline'
      {...props}
    >
      {children}
    </Container>
  );
};

const parsed = data.response.collection;

console.log(data);

export default function MapScroll() {
  return (
    <Box height="100vh" width="100%">
      <Stack>
        {parsed.map((parsed) => (
          <ScrollItem>
            {parsed.name + ", "}
            {parsed.address1 + ", "}
            <Link href={parsed.url}>{parsed.url}</Link>
          </ScrollItem>
        ))}
      </Stack>
    </Box>
  )
}

// const Locations = [
//     { name: "X Depot", address: "1234 Sesame Street"},
//     { name: "Y Depot", address: "2234 Sesame Street"},
//     { name: "Z Depot", address: "3234 Sesame Street"},
//     { name: "Z Depot", address: "3234 Sesame Street"},
//     { name: "Z Depot", address: "3234 Sesame Street"},
//     { name: "Z Depot", address: "3234 Sesame Street"},
//     { name: "Z Depot", address: "3234 Sesame Street"}, 
//     { name: "Z Depot", address: "3234 Sesame Street"},
//     { name: "Z Depot", address: "3234 Sesame Street"},
// ];

// // let url = "https://hosted.where2getit.com/call2recycle/2016/rest/locatorsearch?like=0.383707874261493&lang=en_US";
// fetch("https://hosted.where2getit.com/call2recycle/2016/rest/locatorsearch?like=0.383707874261493&lang=en_US", {
//     "headers": {
//       "accept": "application/json, text/javascript, */*; q=0.01",
//       "accept-language": "en-US,en;q=0.9",
//       "content-type": "application/json",
//       "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "\"macOS\"",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-origin",
//       "x-requested-with": "XMLHttpRequest"
//     },
//     "referrer": "https://hosted.where2getit.com/call2recycle/2016/canada.html?country=CA&redirection=no&form=locator_search&search=SEARCH&addressline=v5m3h9",
//     "referrerPolicy": "strict-origin-when-cross-origin",
//     "body": "{\"request\":{\"appkey\":\"F410B884-0D42-11E0-8532-CCD7A858831C\",\"formdata\":{\"geoip\":false,\"dataview\":\"store_default\",\"limit\":50,\"geolocs\":{\"geoloc\":[{\"addressline\":\"v5m3h9\",\"latitude\":\"\",\"longitude\":\"\"}]},\"searchradius\":\"5|10|15|25|50|250\",\"where\":{\"or\":{\"singleuse\":{\"eq\":\"Y\"},\"rechargeable\":{\"eq\":\"Y\"},\"emobility\":{\"in\":\"\"}}},\"false\":\"0\"}}}",
//     "method": "POST",
//     "credentials": "omit"
//   });


// axios.post(url, data, {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => console.log(response.data))
//   .catch(error => console.error(error))

