import React, { createContext, useContext, useState } from "react";

const PageContextCreate = createContext(null);

export const usePageContext = () => useContext(PageContextCreate);

export default function PageContext({ children }) {
    const [marker, setMarker] = useState(1);

    return (
        <PageContextCreate.Provider value={{ marker: marker, setMarker: setMarker }}>
            {children}
        </PageContextCreate.Provider>
    );
}
