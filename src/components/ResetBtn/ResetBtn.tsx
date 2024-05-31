
interface ResetBtnProps {
  onResetBtn: () => void
}

const ResetBtn = ({onResetBtn}: ResetBtnProps) => {
  return (
    <button type={'button'} className={'btn'} onClick={onResetBtn}>
      Перезапустить
    </button>
  );
};

export default ResetBtn;