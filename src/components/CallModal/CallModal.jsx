import { useRef, useEffect } from "react";
import "./CallModal.css";

export default function CallModal() {
  const dialogRef = useRef(null);

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      closeWithAnimation();
    }
  };

  const closeWithAnimation = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.classList.add("closing");

    const onEnd = () => {
      dialog.classList.remove("closing");
      dialog.close();
      dialog.removeEventListener("animationend", onEnd);
    };

    dialog.addEventListener("animationend", onEnd);
  };

  // Закрытие по Escape — тоже с анимацией
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e) => {
      e.preventDefault(); // отменяем мгновенное закрытие
      closeWithAnimation();
    };

    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, []);

  return (
    <dialog
      ref={dialogRef}
      id="callModal"
      className="callModal"
      onClick={handleBackdropClick}
    >
      <dl className="schedule">
        <dt>Работаем с</dt>
        <dd>09:00</dd>
        <dt>До</dt>
        <dd>18:00</dd>
      </dl>
      <hr />
      <dl className="info">
        <dt>Телефон:</dt>
        <dd>+7 (961) 820-50-70</dd>
      </dl>
      <a className="call" href="tel:+79618205070">
        Позвонить нам
      </a>
    </dialog>
  );
}