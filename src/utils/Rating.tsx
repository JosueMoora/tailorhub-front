import Image from 'next/image';
export const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Image
          key={i}
          alt="rating"
          src="/blueRating.png"
          width={24}
          height={20}
        />
      );
    }
    for (let i = rating; i < 5; i++) {
      stars.push(
        <Image
          key={i}
          alt="rating"
          src="/BlankRating.png"
          width={24}
          height={20}
        />
      );
    }
    return stars;
  };
export const renderStarsHome = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Image
          key={i}
          alt="rating"
          src="/start.png"
          width={26}
          height={20}
        />
      );
    }
    for (let i = rating; i < 5; i++) {
      stars.push(
        <Image
          key={i}
          alt="rating"
          src="/blankStart.png"
          width={23}
          height={20}
        />
      );
    }
    return stars;
  };