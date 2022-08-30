import { useEffect } from 'react';
import { lowerBarModel } from 'widgets/lower-bar';

const { setLink, setText, setIsOpen } = lowerBarModel;

const withWatch = (link: string, text: string, whatToFollow: any) => {
  useEffect(() => {
    setIsOpen(true);
    setLink(link);
    setText(text);
  }, [whatToFollow]);
};

const withoutWacth = (link: string, text: string) => {
  useEffect(() => {
    setIsOpen(true);
    setLink(link);
    setText(text);
  }, []);
};

const base = (link: string, text: string, isOpen: boolean) => {
  setIsOpen(isOpen);
  setLink(link);
  setText(text);
};

const close = () => {
  setIsOpen(false);
};
const open = () => {
  setIsOpen(true);
};

export {
  withWatch,
  withoutWacth,
  close,
  open,
  base,
};
