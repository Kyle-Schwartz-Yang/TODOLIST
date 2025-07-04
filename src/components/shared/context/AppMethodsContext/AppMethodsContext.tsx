// import React from "react";

// interface AppMethodsContextType {
//   toggleTheme: () => void;
//   openModal: () => void;
//   // інші методи
// }

// export const AppMethodsContext =
//   React.createContext<AppMethodsContextType | null>(null);

// export const AppMethodProvider = ({
//   children,
//   value,
// }: {
//   children: React.ReactNode;
//   value: AppMethodsContextType;
// }) => {
//   return (
//     <AppMethodsContext.Provider value={value}>
//       {children}
//     </AppMethodsContext.Provider>
//   );
// };

// // ------------------------------------------------
// // useAppMethods.ts [Так дійсно буде краще.]
// // ------------------------------------------------

// import { useContext } from "react";
// import { AppMethodsContext } from "./AppMethodsContext";

// export const useAppMethods = () => {
//   const context = useContext(AppMethodsContext);
//   if (!context) {
//     throw new Error("useAppMethods must be used within AppMethodsProvider");
//   }
//   return context;
// };

// // ------------------------------------------------
// // App.tsx
// // ------------------------------------------------

// import { AppMethodsProvider } from "@/shared/context/AppMethods";

// function App() {
//   const toggleTheme = () => {
//     /* ... */
//   };
//   const openModal = () => {
//     /* ... */
//   };

//   return (
//     <AppMethodsProvider value={{ toggleTheme, openModal }}>
//       <YourRootLayoutOrRouter />
//     </AppMethodsProvider>
//   );
// }

// // ------------------------------------------------
// // UseMe.tsx
// // ------------------------------------------------

// import { useAppMethods } from "@/shared/context/AppMethods";

// const DeepChild = () => {
//   const { toggleTheme } = useAppMethods();
//   return <button onClick={toggleTheme}>Toggle Theme</button>;
// };

// /*
// > Ідеальний варіант коли кожний контекст має свій хук (важлива рекомендація, гарний паттерн)
// ThemeContext + useTheme()
// UserContext + useUser()
// ModalContext + useModal()
// CartContext + useCart()

// */
