import React from "react";

const QuestionsMap = ({ questions, handleOptionChange, answers }) => {
  return (
    <>
      {questions.map((q, i) => (
        <div className="text-left pl-4 my-3" key={q.id}>
          <div style={{ display: "flex", gap: 5 }}>
            <p
              style={{
                color: "#3AD4AF",
                fontWeight: "600",
                fontSize: 18,
                marginBottom: 0,
              }}
            >
              {q.id}.
            </p>
            <div>
              <p
                style={{
                  color: "#3AD4AF",
                  fontWeight: "600",
                  fontSize: 18,
                  marginBottom: 5,
                }}
              >
                {q.question}
              </p>
              {q.definition !== undefined && (
                <p
                  className="fs-7"
                  style={{ color: "#3AD4AF", fontWeight: "600" }}
                >
                  <i>{q.definition}</i>
                </p>
              )}
              {q.options.map((opt, index) => (
                <div
                  className="q-i-box d-flex flex-row align-items-center mb-2 ml-1"
                  // onChange={(e) => handleOptionChange(e, q.id-1)}
                  key={index}
                >
                  <input
                    type="radio"
                    className="mr-2 fs-6"
                    style={{ cursor: "pointer" }}
                    name={`${q.id}`}
                    required
                    value={`${index}`}
                    id={`ques${q.id}opt${index}`}
                    onChange={async (e) =>
                      await handleOptionChange(q.id, index, e)
                    }
                    checked={answers[q.id] && index === answers[q.id].choice}
                  />
                  <label
                    className="fs-6 m-0"
                    style={{ cursor: "pointer" }}
                    htmlFor={`ques${q.id}opt${index}`}
                  >
                    {opt}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default QuestionsMap;
