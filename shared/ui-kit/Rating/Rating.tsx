import StarIcon from '../../../public/rating/star.svg'
import styles from './Rating.module.css'
import cn from 'classnames'
import {JSX, useEffect, useState} from "react";
import {RatingProps} from "@/shared/ui-kit/Rating/Rating.props.ts";

const Rating = (
    {
        isEditable = false,
        rating,
        setRating,
        className,
        ...props
    }: RatingProps): JSX.Element => {
    const[ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(()=> {
        constructRating(rating);
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updatedRating: JSX.Element[] = ratingArray.map((r: JSX.Element, i: number) => {
            return(
                <StarIcon className={
                    cn(styles.star, {
                        [styles.filled]: i < currentRating
                    })
                }
                          key={i}
                          onMouseEnter={()=> changeDisplay(i + 1)}
                          onMouseLeave={()=> changeDisplay(rating)}
                          onClick={()=> onClick(i + 1)}
                />
            );
        })
        setRatingArray(updatedRating);
    }

    const changeDisplay = (i: number)=>{
        if(!isEditable){
            return;
        }
        constructRating(i);
    }

    const onClick = (i: number)=>{
        if(!isEditable || !setRating){
            return;
        }
        setRating(i);
    }

    return (
        <div {...props}>
            {ratingArray.map((r: JSX.Element, i: number) => (<span key={i}>{r}</span>))}
        </div>
    );
}

export default Rating;