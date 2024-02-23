import { useEffect, useState } from 'react'
import './downloadform.scss'


export const DownloadForm = () =>{
    const [formReady, setFormReady] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showModal, setShowModal] = useState(false);
  
    useEffect(() => {
        if (showModal) {
          const delay = setTimeout(() => {
            setFormReady(true);
          }, 5000);
    
          const interval = setInterval(() => {
            setProgress(prevProgress => (prevProgress < 100 ? prevProgress + 10 : prevProgress));
          }, 500);
    
          return () => {
            clearTimeout(delay);
            clearInterval(interval);
          };
        }
      }, [showModal]);
      const handleDownload = () => {
        fetch('/download/Formularz_zgloszeniowy.pdf')
          .then(response => {
            if (!response.ok) {
              throw new Error('Nie udało się pobrać formularza');
            }
            return response.blob();
          })
          .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Formularz Zgloszeniowy.pdf');
            document.body.appendChild(link);
            link.click();
            if (link.parentNode !== null) {
                link.parentNode.removeChild(link);
              }
          })
          .catch(error => {
            console.error('Błąd pobierania formularza:', error);
          });
          setShowModal(false);
      };
  
  
    const toggleModal = () => {
      setShowModal(!showModal);
      setProgress(0); 
    };
  
    return (
      <div>
        <div className="show-modal-btn" onClick={toggleModal}>Pobierz formularz</div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              {formReady ? (
               <>
                  <p className='forms-paragraf'>Formularz jest gotowy do pobrania!</p>
                  <button className="download-btn" onClick={handleDownload}>Pobierz</button>
             </>
              ) : (
                <>
                  <p>Generowanie formularza...</p>
                  <progress value={progress} max="100"></progress>
                  </>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };