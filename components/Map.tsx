import { Loader } from '@googlemaps/js-api-loader';
import React, { useEffect } from 'react';

const Map = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');
      const { Marker } = await loader.importLibrary('marker') as google.maps.MarkerLibrary;


      // Google Maps coordinates for Philippines
      const center = {
        lat: 12.8797,
        lng: 121.7740, 
      };


      // Philippine view in Google Maps
      const mapOptions: google.maps.MapOptions = {
        center,
        zoom: 5.7, 
        mapId: 'MY_NEXTJS_MAPID',
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
      
      //LGU list
      const locations = [
        { lat: 10.2929011, lng: 123.9016633, name: 'Cebu City' },
        { lat: 11.2436512, lng: 125.0053895, name: 'Tacloban City' },
        { lat: 9.6538991, lng: 123.3057454, name: 'Tagbilaran City' },
        { lat: 14.5895137, lng: 120.4213085, name: 'Manila City' },
        { lat: 7.064525, lng: 125.6051916, name: 'Davao City' },


      ];

      //Loop through all LGUs
      locations.forEach((location) => {
        new Marker({
          map: map,
          position: location,
          title: location.name,
        });
      });
    };

    initMap();
  }, []);

  return (
    <div className='xl:w-[500px] xl:h-[600px] lg:w-[400px] lg:h-[500px] md:w-[450px] md:h-[450px] sm:w-[600px] sm:h-[600px] xs:w-[600px] xs:h-[600px] duration-300 rounded-xl drop-shadow-lg relative' ref={mapRef} />
  );
};

export default Map;
