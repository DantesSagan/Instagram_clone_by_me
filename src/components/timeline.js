/* eslint-disable no-nested-ternary */
import Skeleton from 'react-loading-skeleton';
import { useContext } from 'react';
import LoggedInUserContext from '../context/logged-in-user';
import usePhotos from '../hooks/use-photos';
import Post from './post';

export default function TimeLine() {
  const { user } = useContext(LoggedInUserContext);
  const { photos } = usePhotos(user);

  return (
    <div className="container col-span-2">
      {!photos ? (
        <>
          <Skeleton animation="wave" count={4} width={640} height={640} className="mb-10" />
        </>
      ) : (
        photos.map((content) => <Post key={content.docId} content={content} />)
      )}
    </div>
  );
}
