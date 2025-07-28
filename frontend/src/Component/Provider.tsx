"use client";
import { FullContextProvider } from "./context";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store, persistor } from "./store";

import { PersistGate } from "redux-persist/integration/react";
const client = new QueryClient();
export function Providerr({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <FullContextProvider>

                    <QueryClientProvider client={client}>{children}</QueryClientProvider>
                </FullContextProvider>
            </PersistGate>
        </Provider>
    );
}