import skeleton from '../shared/_skeleton.module.css';

export default function BarCardSkeleton({width, height}: {width?: number; height?: number}) {
  return (
    <div
      className={`${skeleton.skeleton}`}
      style={{width: width ? `${width}px` : '350px', height: height ? `${height}px` : ' 80px'}}
    />
  );
}
