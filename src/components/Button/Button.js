import Link from 'next/link'
import styles from './button.module.sass'

export const IconType = {
    ARROW_RIGHT: 'ARROW_RIGHT',
};

const Button = (props) => {
    if (props.href) {
        return(
        <Link className={styles.button} href={props.href}>
            {props.children}
            <Button.Icon iconType={props.icon} />
        </Link> 
        );
    }

  return <button className={styles.button}>{props.children}</button>
  
};

Button.Icon = ({ iconType }) => {

    if (iconType === 'ARROW_RIGHT' ) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 25 25">
                <path fill="currentColor" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/>
            </svg>
        );
    }
    return null;

};

export default Button;