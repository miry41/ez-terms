<div className="elegant-card p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  学習モードを選択
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {learningModes.map((mode) => {
                    const IconComponent = mode.icon;
                    return (
                      <div
                        key={mode.id}
                        onClick={() => setSelectedMode(mode.id)}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover-lift ${
                          selectedMode === mode.id
                            ? "border-green-500 bg-green-50 gentle-glow"
                            : "border-gray-200 hover:border-green-300"
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`w-12 h-12 ${mode.gradient} rounded-xl flex items-center justify-center mb-4`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          {selectedMode === mode.id && (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {mode.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {mode.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{mode.stats.words}単語</span>
                          <span>{mode.stats.time}</span>
                          <span>{mode.stats.accuracy}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
