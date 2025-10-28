
import {useState} from "react";

export default function useModal(initial = false) {
    const [isOpen, setIsOpen] = useState(initial);

    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
    const onToggle = () => setIsOpen(prev => !prev);

    return { isOpen, onOpen, onClose, onToggle };
}