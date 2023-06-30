import styles from '../styles/Card.module.css';

function CardA() {
    return (
        <div className={styles.container} style={{ backgroundImage: 'url("/images/bg-a-gradient.png")' }}>
            <div className={styles.card} style={{ backgroundImage: 'url("/images/bg-a.png")' }}>
                <div className={`${styles.title_line} ${styles.title_line_blue}`}></div>
                <div className={styles.title}>Introduction to programming</div>
                <div className={styles.tag_list}>
                    <div className={styles.tag}>
                        <span className={styles.tag_text}>Beginner</span>
                    </div>
                </div>
                <div className={styles.desc}>This course covers the most basic concepts in programming using Solidity as an example.</div>
                <div className={styles.attr_list}>
                    <div className={styles.attr}>
                        <img src={'/images/hour.svg'} />
                        <p className={styles.attr_text}>36 Hour</p>
                    </div>
                    <div className={styles.attr} style={{ marginLeft: '0,75rem' }}>
                        <img src={'/images/course.svg'} />
                        <p className={styles.attr_text}>5 Course</p>
                    </div>
                    <div className={styles.attr_complete}>
                        <img src={'/images/complete.svg'} />
                        <p className={styles.attr_text}>45% COMPLETED</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
function CardB() {
    return (
        <div className={styles.container} style={{ backgroundImage: 'url("/images/bg-b-gradient.png")' }}>
            <div className={styles.card} style={{ backgroundImage: 'url("/images/bg-b.png")' }}>
                <div className={styles.title} style={{ marginTop: '0' }}>
                    Moonshot 2023 Summer Hackathon
                </div>
                <div className={styles.tag_list}>
                    <div className={styles.tag}>
                        <span className={styles.tag_text}>All Tracks</span>
                    </div>
                    <div className={styles.tag}>
                        <span className={styles.tag_text}>Solidity</span>
                    </div>
                    <div className={styles.tag}>
                        <span className={styles.tag_text}>ZK</span>
                    </div>
                </div>
                <div className={styles.task_list}>
                    <div className={styles.task}>
                        <div className={styles.label}>Signup</div>
                        <div className={styles.value}>4/15 - 6/15</div>
                    </div>
                    <div className={styles.task}>
                        <div className={styles.label}>Event</div>
                        <div className={styles.value}>6/15 - 7/15</div>
                    </div>
                    <div className={styles.task}>
                        <div className={styles.label}>Grant size</div>
                        <div className={styles.value}>200K</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function CardC() {
    return (
        <div className={styles.container} style={{ backgroundImage: 'url("/images/bg-c-gradient.png")' }}>
            <div className={styles.card} style={{ backgroundImage: 'url("/images/bg-c.png")' }}>
                <div className={`${styles.title_line} ${styles.title_line_green}`}></div>
                <div className={styles.title}>Web 3.0 Programming Basics</div>
                <div className={styles.tag_list}>
                    <div className={styles.tag}>
                        <span className={styles.tag_text}>Beginner</span>
                    </div>
                </div>
                <div className={`${styles.desc} ${styles.desc3}`}>Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.</div>
                <div className={styles.attr_list} style={{ marginTop: '2.8125rem' }}>
                    <div className={styles.attr}>
                        <img src={'/images/hour.svg'} />
                        <p className={styles.attr_text}>36 Hour</p>
                    </div>
                    <div className={styles.attr} style={{ marginLeft: '0.75rem' }}>
                        <img src={'/images/course.svg'} />
                        <p className={styles.attr_text}>5 Course</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
function CardD() {
    return (
        <div className={styles.container} style={{ backgroundImage: 'url("/images/bg-d-gradient.png")' }}>
            <div className={`${styles.card} ${styles.card_coin}`} style={{ backgroundImage: 'url("/images/bg-d.png")' }}>
                <div className={`${styles.title_line} ${styles.title_line_orange}`}></div>
                <div className={styles.question}>What is Bitcoin</div>
                <div className={styles.attr} style={{ margin: '2.8125rem 0 0 11.875rem' }}>
                    <img src={'/images/hour.svg'} />
                    <p className={styles.attr_text}>36 Hour</p>
                </div>
            </div>
        </div>
    );
}

export { CardA, CardB, CardC, CardD };
