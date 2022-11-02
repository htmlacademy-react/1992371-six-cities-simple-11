import { PlaceCardInfo } from '../../types';
import { AppCard } from '../AppCard/AppCard';

type ListOffersProps = {
  places: PlaceCardInfo[];
};

function ListOffers({ places }: ListOffersProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {places.map((offer: PlaceCardInfo) => (
        <AppCard offer={offer} key={offer.id} />
      ))}
    </div>
  );
}

export default ListOffers;
