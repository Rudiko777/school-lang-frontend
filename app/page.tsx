import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/ui-kit/Button/Button";
import {withMainPageLayout} from "@/layouts/MainPageLayout";

function Home() {
  return (
    <main className={styles.main}>
        3123
        <Button size={'large'} typeBtn={'contained'} action={'simple'} color={'purple'}>
            Попробовать бесплатно
        </Button>
        <Button size={'medium'} typeBtn={'outlined'} action={'add'} color={'purple'}>
            Попробовать бесплатно
        </Button>
        <Button size={'small'} typeBtn={'ghost'} action={'simple'} color={'purple'}>
            Попробовать бесплатно
        </Button>
        <Button size={'small'} typeBtn={'contained'} action={'add'} color={'red'}>
            Попробовать бесплатно
        </Button>
        <Button size={'medium'} typeBtn={'outlined'} action={'add'} color={'red'}>
            Попробовать бесплатно
        </Button>
        <Button size={'large'} typeBtn={'ghost'} action={'add'} color={'red'}>
            Попробовать бесплатно
        </Button>
        <Button size={'small'} typeBtn={'contained'} action={'add'} color={'blue'}>
            Попробовать бесплатно
        </Button>
        <Button size={'medium'} typeBtn={'outlined'} action={'simple'} color={'blue'}>
            Попробовать бесплатно
        </Button>
        <Button size={'large'} typeBtn={'ghost'} action={'add'} color={'blue'}>
            Попробовать бесплатно
        </Button>
        <Button size={'small'} typeBtn={'contained'} disabled={true}>
            Попробовать бесплатно
        </Button>
        <Button size={'medium'} typeBtn={'outlined'} disabled>
            Попробовать бесплатно
        </Button>
        <Button size={'large'} typeBtn={'ghost'} disabled>
            Попробовать бесплатно
        </Button>
        <Button size={'medium'} typeBtn={'contained'} color={'purple'}>
            Начать обучение
        </Button>
    </main>
  );
}

export default withMainPageLayout(Home);