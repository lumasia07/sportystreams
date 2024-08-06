import { useSpring } from '@react-spring/web';

export const useMenuAnimation = (isOpen) => {
  const menuAnimation = useSpring({
    transform: isOpen ? 'perspective(1000px) rotateX(0deg)' : 'perspective(1000px) rotateX(-90deg)',
    opacity: isOpen ? 1 : 0,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return menuAnimation;
};