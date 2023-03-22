import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('../components/Map'), {
    ssr: false
});

const Map = () => {
    const [renderMap, setRenderMap] = useState(false);

    useEffect(() => {
        setRenderMap(true);
    }, []);

    return renderMap ? <MapWithNoSSR /> : null;
};

export default Map;
