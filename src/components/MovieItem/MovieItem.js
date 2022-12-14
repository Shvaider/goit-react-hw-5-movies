
import { useLocation } from 'react-router-dom';
import { ListItem, Img, LinkItem, Title, Span } from './MovieItems.styled';
import defaultImage from '../../img/defaultImage.jpg';

export default function MovieItem({
  id,
  original_title,
  poster_path,
  release_date,
}) {
  const date = release_date ? <Span>({release_date.slice(0, 4)})</Span> : '';
  const location = useLocation();
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const IMG = poster_path ? `${IMG_URL}/${poster_path}` : defaultImage;
  return (
    <ListItem>
      <LinkItem to={`/movies/${id}`} state={{ from: location }}>
        <Img src={IMG} alt="" />
        <Title>
          {original_title} {date}
        </Title>
      </LinkItem>
    </ListItem>
  );
}