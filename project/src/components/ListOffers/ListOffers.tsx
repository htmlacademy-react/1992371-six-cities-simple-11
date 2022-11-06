import { PlaceCardInfo } from '../../types';
import { PlaceCard } from '../PlaceCard/PlaceCard';
import { useState } from 'react';

type ListOffersProps = {
  places: PlaceCardInfo[];
};

function ListOffers({ places }: ListOffersProps) {
  const [, setActiveCardId] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((offer: PlaceCardInfo) => (
        <div key={offer.id}
          onMouseEnter={() => setActiveCardId(offer.id)}
          onMouseLeave={() => setActiveCardId(0)}
        >

          <PlaceCard offer={offer} />
        </div>
      ))}
    </div>
  );
}

export default ListOffers;
