import { useState } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import styles from './Feedback.module.scss'
import components_styles from '../../styles/Components.module.scss'


function Feedback() {
    const [windowIndex, setWindowIndex] = useState(null);

    return (
        <>
            <div className={styles['feedback-container']}>
                <button
                    onClick={() => !windowIndex || windowIndex == 2 ? setWindowIndex(1) : setWindowIndex(null)}
                    className={`${components_styles.btn} ${styles['btn-sugg']}`}>
                    💡 Send a suggestion {windowIndex == 1 ? <ArrowUpIcon className={`${components_styles['h-icon']} ${styles['arrow-icon']}`} /> : ''}
                </button>
                <button
                    onClick={() => !windowIndex || windowIndex == 1 ? setWindowIndex(2) : setWindowIndex(null)}
                    className={`${components_styles.btn} ${styles['btn-dead-link']}`}>
                    🔗 Report a dead link {windowIndex == 2 ? <ArrowUpIcon className={`${components_styles['h-icon']} ${styles['arrow-icon']}`} /> : ''}
                </button>

            </div>
            <SendSuggestion index={windowIndex} />
            <ReportDeadLink index={windowIndex} />

        </>
    )
}

function ReportDeadLink({ index }) {
    return (
        <>
            <div className={styles["form-suggestion-overflow-hidden"]}>
                <div className={`${styles['form-suggestion-container']} ${index == 2 ? styles['active'] : styles['hidden']}`}>
                    <h2>Report a dead link ☠️</h2>
                    <hr />
                    <form className={styles['form-suggestion']}>
                        <select id="form-category-select" defaultValue="" className={styles['form-select']}>
                            <option value="" disabled hidden>Select a category</option>
                            <option value="Beginner essentials">Dictionary</option>
                            <option value="Dictionary">Dictionary</option>
                            <option value="Grammar">Grammar</option>
                            <option value="Vocabulary">Vocabulary</option>
                            <option value="Reading">Reading</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                            <option value="Application">Application</option>
                        </select>
                        <div className={styles["form-suggestion-inputs"]}>
                            <input className={`${styles['sugg-input']} ${styles['name']}`} type="text" placeholder="Name" required />
                            <input className={`${styles['sugg-input']} ${styles['url']}`} type="url" placeholder="https://..." required />
                        </div>
                        <button type="submit" className={`${components_styles.btn} ${styles['btn-send']}`}>✉️ Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

function SendSuggestion({ index }) {
    return (
        <>
            <div className={styles["form-suggestion-overflow-hidden"]}>
                <div className={`${styles['form-suggestion-container']} ${index == 1 ? styles['active'] : styles['hidden']}`}>
                    <h2>Share your favorite Japanese learning tool</h2>
                    <hr />
                    <form className={styles['form-suggestion']}>
                        <select id="form-category-select" defaultValue="" className={styles['form-select']}>
                            <option value="" disabled hidden>Select a category</option>
                            <option value="Beginner essentials">Dictionary</option>
                            <option value="Dictionary">Dictionary</option>
                            <option value="Grammar">Grammar</option>
                            <option value="Vocabulary">Vocabulary</option>
                            <option value="Reading">Reading</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                            <option value="Application">Application</option>
                        </select>
                        <div className={styles["form-suggestion-inputs"]}>
                            <input className={`${styles['sugg-input']} ${styles['name']}`} type="text" placeholder="Name" required />
                            <input className={`${styles['sugg-input']} ${styles['url']}`} type="url" placeholder="https://..." required />
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