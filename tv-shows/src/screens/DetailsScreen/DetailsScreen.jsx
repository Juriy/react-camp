import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { Icon, Label } from 'semantic-ui-react';

const DetailsScreen = () => {
  const [details, setDetails] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const params = new URLSearchParams({
      api_key: process.env.REACT_APP_API_KEY,      
      language: "en-US",
    });
    fetch(`https://api.themoviedb.org/3/tv/${id}?${params}`)
      .then((data) => data.json())
      .then((data) => {
        const { genres, name, overview } = data;
        setDetails({ genres, name, overview });
        setIsLoaded(true);
      })
      .catch((error) => console.error(error));
  }, [id, setDetails]);

  if (isLoaded === false) {
      return (
          <div>
              Loading...
          </div>
      )
  }
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Section> <Link to="/popular">Home</Link></Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link active>Details</Breadcrumb.Section>
      </Breadcrumb>

      <h2>Tv Shows</h2>

      {details.genres && details.genres.forEach(element => {
        return (<Label> 
            {element.name}
        </Label>)    
      })}
      
      <ul>
        <li>{details.name}</li>
        {/* <li>{details.genres}</li> */}
        <li>{details.overview}</li>
      </ul>
    </div>
  );
};

export default DetailsScreen;
