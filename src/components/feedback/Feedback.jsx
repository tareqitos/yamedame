import { useState, useEffect, useRef } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import styles from './Feedback.module.scss'
import components_styles from '../../styles/Components.module.scss'


function Feedback() {
    const [windowIndex, setWindowIndex] = useState(null);

    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [honeypot, setHoneypot] = useState(''); // Honeypot field


    function toogleWindow(index, this_index) {
        setSuccess(false)
        setError('')
        !windowIndex || windowIndex == index ? setWindowIndex(this_index) : setWindowIndex(null)
    }

    const name_reference = useRef();
    const url_reference = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (honeypot) {
            // If honeypot field is filled, it's likely a bot
            setError('Bot detected');
            return;
        }

        setSuccess(false);
        setError('');

        name_reference.current.value = ''
        url_reference.current.value = ''

        try {
            const reponse = await fetch('https://api.tareqitos.me/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ category, name, url })
            });

            if (reponse.ok) {
                setSuccess(true);
                setCategory('');
                setName('');
                setUrl('')
            } else {
                throw new Error('Failed to send feedback ⛓️‍💥')
            }
        } catch (err) {
            setError('Failed to send feedback ⛓️‍💥')
        }
    }

    useEffect(() => {
        AOS.init();
    }, [windowIndex, setWindowIndex])

    return (
        <>
            <div className={styles['feedback-container']}>
                <button
                    onClick={() => toogleWindow(2, 1)}
                    className={`${components_styles.btn} ${styles['btn-sugg']}`}>
                    💡 Send a suggestion {windowIndex == 1 ? <ArrowUpIcon className={`${components_styles['h-icon']} ${styles['arrow-icon']}`} /> : ''}
                </button>
                <button
                    onClick={() => toogleWindow(1, 2)}
                    className={`${components_styles.btn} ${styles['btn-dead-link']}`}>
                    🔗 Report a dead link {windowIndex == 2 ? <ArrowUpIcon className={`${components_styles['h-icon']} ${styles['arrow-icon']}`} /> : ''}
                </button>

            </div>
            <SendSuggestion
                success={success}
                error={error}
                setCategory={setCategory}
                setName={setName}
                setUrl={setUrl}
                handleSubmit={handleSubmit}
                name_reference={name_reference}
                url_reference={url_reference}
                index={windowIndex}
                honeypot={honeypot} setHoneypot={setHoneypot} />
            <ReportDeadLink
                success={success}
                error={error}
                setCategory={setCategory}
                setName={setName}
                setUrl={setUrl}
                handleSubmit={handleSubmit}
                name_reference={name_reference}
                url_reference={url_reference}
                index={windowIndex}
                honeypot={honeypot} setHoneypot={setHoneypot} />

        </>
    )
}

function ReportDeadLink({ name_reference, url_reference, success, error, setCategory, setName, setUrl, handleSubmit, honeypot, setHoneypot, index }) {
    return (
        <>
            <div className={styles["form-suggestion-overflow-hidden"]}>
                <div className={`${styles['form-suggestion-container']} ${index == 2 ? styles['active'] : styles['hidden']}`}>
                    <h2>Report a dead link ☠️</h2>
                    <hr />

                    {success ? <p className={styles.success}>Thank you for your report! 🚀</p> :
                        error ? <p className={styles.error}>Error: {error}</p> : ''}

                    <form className={styles['form-suggestion']} onSubmit={handleSubmit}>
                        <select id="form-category-select" defaultValue="" className={styles['form-select']} onChange={(e) => setCategory(e.target.value)}>
                            <option value="" disabled hidden>Select a category</option>
                            <option value="Beginner essentials">Beginner essentials</option>
                            <option value="Dictionary">Dictionary</option>
                            <option value="Grammar">Grammar</option>
                            <option value="Vocabulary">Vocabulary</option>
                            <option value="Reading">Reading</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                            <option value="Application">Application</option>
                            <option value="Other">Other</option>
                        </select>
                        <div className={styles["form-suggestion-inputs"]}>
                            <input ref={name_reference} onChange={(e) => setName(e.target.value)} className={`${styles['sugg-input']} ${styles['name']}`} type="text" placeholder="Name" required />
                            <input ref={url_reference} onChange={(e) => setUrl(e.target.value)} className={`${styles['sugg-input']} ${styles['url']}`} type="url" placeholder="https://..." required />
                            <input
                                type="text"
                                value={honeypot}
                                onChange={(e) => setHoneypot(e.target.value)}
                                style={{ display: 'none' }} // Honeypot field
                            />
                        </div>
                        <button type="submit" className={`${components_styles.btn} ${styles['btn-send']}`}>✉️ Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

function SendSuggestion({ name_reference, url_reference, success, error, setCategory, setName, setUrl, handleSubmit, honeypot, setHoneypot, index }) {
    return (
        <>
            <div className={styles["form-suggestion-overflow-hidden"]}>
                <div className={`${styles['form-suggestion-container']} ${index == 1 ? styles['active'] : styles['hidden']}`}>
                    <h2>Share your favorite Japanese learning tool 📖</h2>
                    <hr />

                    {success ? <p className={styles.sucess}>Thank you for your report! 🚀</p> :
                        error ? <p className={styles.error}>Error: {error}</p> : ''}

                    <form className={styles['form-suggestion']} onSubmit={handleSubmit}>
                        <select id="form-category-select" defaultValue="" className={styles['form-select']} onChange={(e) => setCategory(e.target.value)}>
                            <option value="" disabled hidden>Select a category</option>
                            <option value="Beginner essentials">Beginner essentials</option>
                            <option value="Dictionary">Dictionary</option>
                            <option value="Grammar">Grammar</option>
                            <option value="Vocabulary">Vocabulary</option>
                            <option value="Reading">Reading</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                            <option value="Application">Application</option>
                            <option value="Other">Other</option>
                        </select>
                        <div className={styles["form-suggestion-inputs"]}>
                            <input ref={name_reference} onChange={(e) => setName(e.target.value)} className={`${styles['sugg-input']} ${styles['name']}`} type="text" placeholder="Name" required />
                            <input ref={url_reference} onChange={(e) => setUrl(e.target.value)} className={`${styles['sugg-input']} ${styles['url']}`} type="url" placeholder="https://..." required />
                            <input
                                type="text"
                                value={honeypot}
                                onChange={(e) => setHoneypot(e.target.value)}
                                style={{ display: 'none' }} // Honeypot field
                            />
                        </div>
                        <p className={styles['form-specific-request']}>For a specific request or feedback, feel free to <a href='mailto:social@tareqitos.com'>contact me</a> directly!</p>
                        <button type="submit" className={`${components_styles.btn} ${styles['btn-send']}`} >✉️ Send Suggestion</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Feedback