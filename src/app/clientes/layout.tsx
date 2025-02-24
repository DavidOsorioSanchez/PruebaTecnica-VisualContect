import { ReactNode } from "react";

interface Props {
    children: ReactNode; // Define children as ReactNode
};
export default function Layout({ children}: Props) {
    return <main>{children}</main>;
}