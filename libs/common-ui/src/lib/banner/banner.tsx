import styles from './banner.module.scss';

// /* eslint-disable-next-line */
// export interface BannerProps {}

// export function Banner(props: BannerProps) {
//   return (
//     <div className={styles['container']}>
//       <h1>Welcome to Banner!</h1>
//     </div>
//   );
// }
// export default Banner;

export interface BannerProps {
  text: string;
}

export function Banner(props: BannerProps) {
  return  <div className={[styles['container'], "mt-[30px]"].join(' ')} >{props.text}</div>;
  // return  <div className="main-class">{props.text}</div>;
}


export default Banner;
