import styles from './index.less';

export default function IndexPage() {
  console.log('process.env.__DEV__: ', process.env.__DEV__);
  return (
    <div>
      <h1 className={styles.title}>
        {process.env.__DEV__ === 'true' ? 'Page dev' : 'Page prod'}
      </h1>
    </div>
  );
}
