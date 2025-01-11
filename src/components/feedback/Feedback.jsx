import { useState } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import styles from './Feedback.module.scss'
import components_styles from '../../styles/Components.module.scss'


function Feedback() {

    const [isSuggestionActive, setIsSuggestionActive] = useState(false);

    return (
        <>
            <div className={styles['feedback-container']}>
                <button
                    onClick={() => setIsSuggestionActive(!isSuggestionActive)}
                    className={`${components_styles.btn} ${styles['btn-sugg']}`}>
                    💡 Send a suggestion {isSuggestionActive ? <ArrowUpIcon className={`${components_styles['h-icon']} ${styles['arrow-icon']}`}/> : ''}
                </button>
                <button className={`${components_styles.btn} ${styles['btn-dead-link']}`}>🔗 Report a dead link</button>
            </div>
            <SendSuggestion isSuggestionActive={isSuggestionActive} />
        </>
    )
}

function SendSuggestion({ isSuggestionActive }) {
    return (
        <>
            <div className={styles["form-suggestion-overflow-hidden"]}>
                <div className={`${styles['form-suggestion-container']} ${isSuggestionActive ? styles['active'] : styles['hidden']}`}>
                    <h2>Share your favorite Japanese learning tool!</h2>
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
                        <button type="submit" className={`${components_styles.btn} ${styles['btn-send']}`}>✉️ Send Suggestion</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Feedback