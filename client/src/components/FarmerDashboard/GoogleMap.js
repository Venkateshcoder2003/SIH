// import React, { useEffect, useRef } from 'react';


// const GoogleMap = ({ apiKey, center }) => {
//     const mapRef = useRef(null);
//     const mapInstanceRef = useRef(null);
//     const markerRef = useRef(null);
//     apiKey = 'AIzaSyArhd05y22cQYGTyOt9ke3KVyD89y5_o_s';
//     useEffect(() => {
//         // Check if Google Maps is already loaded
//         if (window.google && window.google.maps) {
//             initializeMap();
//         } else {
//             // Load Google Maps Script
//             const script = document.createElement('script');
//             script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
//             script.async = true;
//             script.defer = true;
//             script.onload = initializeMap;
//             document.head.appendChild(script);

//             return () => {
//                 document.head.removeChild(script);
//             };
//         }
//     }, [apiKey]);

//     const initializeMap = () => {
//         if (!mapRef.current) return;

//         const mapOptions = {
//             center: center,
//             zoom: 15,
//             styles: [
//                 {
//                     featureType: "poi",
//                     elementType: "labels",
//                     stylers: [{ visibility: "off" }]
//                 }
//             ]
//         };

//         // Create new map instance
//         mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions);

//         // Create marker for user location
//         markerRef.current = new window.google.maps.Marker({
//             position: center,
//             map: mapInstanceRef.current,
//             icon: {
//                 path: window.google.maps.SymbolPath.CIRCLE,
//                 scale: 8,
//                 fillColor: "#4285F4",
//                 fillOpacity: 1,
//                 strokeColor: "#ffffff",
//                 strokeWeight: 2,
//             },
//             title: "Your Location"
//         });
//     };

//     // Update map and marker when center changes
//     useEffect(() => {
//         if (mapInstanceRef.current && markerRef.current && center) {
//             mapInstanceRef.current.panTo(center);
//             markerRef.current.setPosition(center);
//         }
//     }, [center]);

//     return (
//         <div
//             ref={mapRef}
//             className="w-full h-[400px] rounded-lg shadow-md"
//             style={{ minHeight: "400px" }}
//         />
//     );
// };

// export default GoogleMap;


import React, { useEffect, useRef } from 'react';

const GoogleMap = ({ apiKey, center }) => {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markerRef = useRef(null);

    apiKey = 'AIzaSyArhd05y22cQYGTyOt9ke3KVyD89y5_o_s';

    useEffect(() => {
        // Check if Google Maps is already loaded
        if (window.google && window.google.maps) {
            initializeMap();
        } else {
            // Load Google Maps Script
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
            script.async = true;
            script.defer = true;
            script.onload = initializeMap;
            document.head.appendChild(script);

            return () => {
                document.head.removeChild(script);
            };
        }
    }, [apiKey]);

    const initializeMap = () => {
        if (!mapRef.current) return;

        const mapOptions = {
            center: center,
            zoom: 15,
            styles: [
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }]
                }
            ]
        };

        // Create new map instance
        mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions);

        // Create marker for user location
        markerRef.current = new window.google.maps.Marker({
            position: center,
            map: mapInstanceRef.current,
            icon: {
                path: window.google.maps.SymbolPath.CIRCLE,
                scale: 8,
                fillColor: "#4285F4",
                fillOpacity: 1,
                strokeColor: "#ffffff",
                strokeWeight: 2,
            },
            title: "Your Location"
        });
    };

    // Update map and marker when center changes
    useEffect(() => {
        if (mapInstanceRef.current && markerRef.current && center) {
            mapInstanceRef.current.panTo(center);
            markerRef.current.setPosition(center);
        }
    }, [center]);

    return (
        <div
            ref={mapRef}
            className="w-full h-[400px] rounded-lg shadow-md"
            style={{ minHeight: "400px" }}
        />
    );
};

export default GoogleMap;
