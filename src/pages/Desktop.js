import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop9}>
      <header className={styles.frameRoot}>
        <img
          className={styles.component40Icon}
          loading="eager"
          alt=""
          src="/component-40@2x.png"
        />
        <div className={styles.frameLoginParent}>
          <div className={styles.frameLogin}>
            <div className={styles.home}>Home</div>
            <div className={styles.flashcard}>Flashcard</div>
            <div className={styles.contact}>Contact</div>
          </div>
          <div className={styles.faq}>FAQ</div>
          <button className={styles.homeFrame}>
            <div className={styles.login}>Login</div>
          </button>
        </div>
      </header>
      <main className={styles.relationsFrame}>
        <div className={styles.frameMathematics}>
          <div className={styles.frameRelationsFunctions}>
            <img
              className={styles.studyLineFrame}
              loading="eager"
              alt=""
              src="/frame.svg"
            />
            <img className={styles.quizLineFrame} alt="" src="/frame-1.svg" />
            <div className={styles.flashcard1}>Flashcard</div>
          </div>
          <div className={styles.gameLineFrame}>
            <img
              className={styles.frameContentIcon}
              alt=""
              src="/frame-2.svg"
            />
            <div className={styles.mathematics}>Mathematics</div>
            <div className={styles.textFunctionRelations}>
              <img
                className={styles.frameStudyQuizTestGame}
                alt=""
                src="/frame-2.svg"
              />
              <div className={styles.relationAndFunction}>
                Relation and Function
              </div>
            </div>
          </div>
        </div>
        <section className={styles.maskGroupContainer}>
          <h2 className={styles.relationsAndFunctions}>
            Relations and Functions ( Mathematics )
          </h2>
          <div className={styles.textPublishedBy}>
            <div className={styles.createFlashcardButton}>
              <div className={styles.createFlashcardButtonInner}>
                <div className={styles.frameParent}>
                  <div className={styles.studyParent}>
                    <b className={styles.study}>Study</b>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.quizParent}>
                    <div className={styles.quiz}>Quiz</div>
                    <div className={styles.frameItem} />
                  </div>
                  <div className={styles.testParent}>
                    <div className={styles.test}>Test</div>
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.gameParent}>
                    <div className={styles.game}>Game</div>
                    <div className={styles.lineDiv} />
                  </div>
                  <div className={styles.othersParent}>
                    <div className={styles.others}>Others</div>
                    <div className={styles.frameChild1} />
                  </div>
                </div>
              </div>
              <div className={styles.comp}>
                <div className={styles.maskSet}>
                  <div className={styles.maskGroup}>
                    <div className={styles.cardBackWrapper}>
                      <div className={styles.cardBack}>
                        <div className={styles.cardSurface} />
                        <div className={styles.subCard3}>
                          <img className={styles.frameIcon} alt="" />
                          <div className={styles.x12Wrapper}>
                            <b className={styles.x12}>5x + 12</b>
                          </div>
                          <img className={styles.frameIcon1} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="/mask-group.svg"
                />
              </div>
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon}
                  loading="eager"
                  alt=""
                  src="/vector.svg"
                />
                <div className={styles.vectorGroup}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className={styles.b}>01/10</b>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.frameContainer}>
          <div className={styles.wrapperGroup1Parent}>
            <div className={styles.wrapperGroup1}>
              <img
                className={styles.wrapperGroup1Child}
                loading="eager"
                alt=""
                src="/group-1@2x.png"
              />
            </div>
            <div className={styles.publishedByParent}>
              <b className={styles.publishedBy}>Published by</b>
              <img
                className={styles.component40Icon1}
                alt=""
                src="/component-40-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.createFlashcardBtnParent}>
            <img
              className={styles.createFlashcardBtn}
              alt=""
              src="/frame-6.svg"
            />
            <h3 className={styles.createFlashcard}>Create Flashcard</h3>
          </div>
        </section>
        <section className={styles.faqParent}>
          <h1 className={styles.faq1}>FAQ</h1>
          <div className={styles.component53Parent}>
            <div className={styles.component53}>
              <input
                className={styles.canEducationFlashcards}
                placeholder="Can education flashcards be used for all age groups?"
                type="text"
              />
              <img
                className={styles.educationFlashcardsIcon}
                alt=""
                src="/frame-7.svg"
              />
            </div>
            <div className={styles.component54}>
              <div className={styles.howDoEducation}>
                How do education flashcards work?
              </div>
              <img className={styles.frameIcon2} alt="" src="/frame-7.svg" />
            </div>
            <div className={styles.component55}>
              <div className={styles.canEducationFlashcards1}>
                Can education flashcards be used for test preparation?
              </div>
              <img className={styles.frameIcon3} alt="" src="/frame-7.svg" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop;
