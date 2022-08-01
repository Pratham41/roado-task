const mongoose = require('mongoose')

// WORDS SCHEMA
const wordsSchema = mongoose.Schema(
  {
    id: {
      type: String,
    },
    language: {
      type: String,
    },
    lexicalEntries: [
      {
        compounds: [
          {
            domains: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            id: { type: String },
            language: {
              type: String,
            },
            regions: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            registers: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            text: { type: String },
          },
        ],
        derivativeOf: [
          {
            domains: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            id: { type: String },
            language: {
              type: String,
            },
            regions: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            registers: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            text: { type: String },
          },
        ],

        derivatives: [
          {
            domains: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            id: { type: String },
            language: {
              type: String,
            },
            regions: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            registers: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            text: { type: String },
          },
        ],

        entries: [
          {
            crossReferenceMarkers: [{ type: String }],
            crossReferences: [
              {
                id: { type: String },
                text: { type: String },
                type: { type: String },
              },
            ],
            etymologies: [{ type: String }],
            grammaticalFeatures: [
              {
                id: { type: String },
                text: { type: String },
                type: { type: String },
              },
            ],
            homographNumber: { type: String },
            inflections: [
              {
                domains: [
                  {
                    id: { type: String },
                    text: { type: String },
                  },
                ],
                grammaticalFeatures: [
                  {
                    id: { type: String },
                    text: { type: String },
                    type: { type: String },
                  },
                ],
                inflectedForm: { type: String },
                lexicalCategory: {
                  id: { type: String },
                  text: { type: String },
                },
                pronunciations: [
                  {
                    audioFile: { type: String },
                    dialects: [{ type: String }],
                    phoneticNotation: { type: String },
                    phoneticSpelling: { type: String },
                    regions: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    registers: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                  },
                ],
                regions: [
                  {
                    id: { type: String },
                    text: { type: String },
                  },
                ],
                registers: [
                  {
                    id: { type: String },
                    text: { type: String },
                  },
                ],
              },
            ],
            notes: [
              {
                id: { type: String },
                text: { type: String },
                type: { type: String },
              },
            ],
            pronunciations: [
              {
                audioFile: { type: String },
                dialects: [{ type: String }],
                phoneticNotation: { type: String },
                phoneticSpelling: { type: String },
                regions: [
                  {
                    id: { type: String },
                    text: { type: String },
                  },
                ],
                registers: [
                  {
                    id: { type: String },
                    text: { type: String },
                  },
                ],
              },
            ],
            senses: [
              {
                antonyms: [
                  {
                    domains: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    id: { type: String },
                    language: { type: String },
                    regions: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    registers: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    text: { type: String },
                  },
                ],
                constructions: [
                  {
                    domains: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    examples: [[{ type: String }]],
                    notes: [
                      {
                        id: { type: String },
                        text: { type: String },
                        type: { type: String },
                      },
                    ],
                    regions: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    registers: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    text: { type: String },
                  },
                ],
                crossReferenceMarkers: [{ type: String }],
                crossReferences: [
                  {
                    id: { type: String },
                    text: { type: String },
                    type: { type: String },
                  },
                ],
                definitions: [{ type: String }],
                domainClasses: [
                  {
                    id: { type: String },
                    text: { type: String },
                  },
                ],
                domains: [
                  {
                    id: { type: String },
                    text: { type: String },
                  },
                ],
                etymologies: [{ type: String }],
                examples: [
                  {
                    definitions: [{ type: String }],
                    domains: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    notes: [
                      {
                        id: { type: String },
                        text: { type: String },
                        type: { type: String },
                      },
                    ],
                    regions: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    registers: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    senseIds: [{ type: String }],
                    text: { type: String },
                  },
                ],
                id: { type: String },
                inflections: [
                  {
                    domains: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    grammaticalFeatures: [
                      {
                        id: { type: String },
                        text: { type: String },
                        type: { type: String },
                      },
                    ],
                    inflectedForm: { type: String },
                    lexicalCategory: {
                      id: { type: String },
                      text: { type: String },
                    },
                    pronunciations: [
                      {
                        audioFile: { type: String },
                        dialects: [{ type: String }],
                        phoneticNotation: { type: String },
                        phoneticSpelling: { type: String },
                        regions: [
                          {
                            id: { type: String },
                            text: { type: String },
                          },
                        ],
                        registers: [
                          {
                            id: { type: String },
                            text: { type: String },
                          },
                        ],
                      },
                    ],
                    regions: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    registers: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                  },
                ],
                notes: [
                  {
                    id: { type: String },
                    text: { type: String },
                    type: { type: String },
                  },
                ],
                pronunciations: [
                  {
                    audioFile: { type: String },
                    dialects: [{ type: String }],
                    phoneticNotation: { type: String },
                    phoneticSpelling: { type: String },
                    regions: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    registers: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                  },
                ],
                regions: [
                  {
                    id: { type: String },
                    text: { type: String },
                  },
                ],
                registers: [
                  {
                    id: { type: String },
                    text: { type: String },
                  },
                ],
                semanticClasses: [
                  {
                    id: { type: String },
                    text: { type: String },
                  },
                ],
                shortDefinitions: [{ type: String }],
                subsenses: [{}],
                synonyms: [
                  {
                    domains: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    id: { type: String },
                    language: { type: String },
                    regions: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    registers: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    text: { type: String },
                  },
                ],
                thesaurusLinks: [
                  {
                    entry_id: { type: String },
                    sense_id: { type: String },
                  },
                ],
                variantForms: [
                  {
                    domains: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    notes: [
                      {
                        id: { type: String },
                        text: { type: String },
                        type: { type: String },
                      },
                    ],
                    pronunciations: [
                      {
                        audioFile: { type: String },
                        dialects: [{ type: String }],
                        phoneticNotation: { type: String },
                        phoneticSpelling: { type: String },
                        regions: [
                          {
                            id: { type: String },
                            text: { type: String },
                          },
                        ],
                        registers: [
                          {
                            id: { type: String },
                            text: { type: String },
                          },
                        ],
                      },
                    ],

                    regions: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    registers: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    text: { type: String },
                  },
                ],
              },
            ],

            variantForms: [
              {
                domains: [
                  {
                    id: { type: String },
                    text: { type: String },
                  },
                ],
                notes: [
                  {
                    id: { type: String },
                    text: { type: String },
                    type: { type: String },
                  },
                ],
                pronunciations: [
                  {
                    audioFile: { type: String },
                    dialects: [{ type: String }],
                    phoneticNotation: { type: String },
                    phoneticSpelling: { type: String },
                    regions: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                    registers: [
                      {
                        id: { type: String },
                        text: { type: String },
                      },
                    ],
                  },
                ],
                regions: [
                  {
                    id: { type: String },
                    text: { type: String },
                  },
                ],
                registers: [
                  {
                    id: { type: String },
                    text: { type: String },
                  },
                ],
                text: { type: String },
              },
            ],
          },
        ],

        grammaticalFeatures: [
          {
            id: { type: String },
            text: { type: String },
            type: { type: String },
          },
        ],
        language: { type: String },
        lexicalCategory: {
          id: { type: String },
          text: { type: String },
        },
        notes: [
          {
            id: { type: String },
            text: { type: String },
            type: { type: String },
          },
        ],
        phrasalVerbs: [
          {
            domains: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            id: { type: String },
            language: { type: String },
            regions: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            registers: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            text: { type: String },
          },
        ],

        phrases: [
          {
            domains: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            id: { type: String },
            language: { type: String },
            regions: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            registers: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            text: { type: String },
          },
        ],

        pronunciations: [
          {
            audioFile: { type: String },
            dialects: [{ type: String }],
            phoneticNotation: { type: String },
            phoneticSpelling: { type: String },
            regions: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            registers: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
          },
        ],

        root: { type: String },
        text: { type: String },
        variantForms: [
          {
            domains: [
              {
                id: { type: String },
                text: { type: String },
              },
            ],
            notes: [
              {
                id: { type: String },
                text: { type: String },
                type: { type: String },
              },
            ],
            pronunciations: [
                {
                  audioFile: { type: String },
                  dialects: [{ type: String }],
                  phoneticNotation: { type: String },
                  phoneticSpelling: { type: String },
                  regions: [
                    {
                      id: { type: String },
                      text: { type: String },
                    },
                  ],
                  registers: [
                    {
                      id: { type: String },
                      text: { type: String },
                    },
                  ],
                },
              ],
              regions: [
                {
                  id: { type: String },
                  text: { type: String },
                },
              ],
              registers: [
                {
                  id: { type: String },
                  text: { type: String },
                },
              ],
              text: { type: String },
          },
        ],
      },
    ],
    pronunciations: [
        {
          audioFile: { type: String },
          dialects: [{ type: String }],
          phoneticNotation: { type: String },
          phoneticSpelling: { type: String },
          regions: [
            {
              id: { type: String },
              text: { type: String },
            },
          ],
          registers: [
            {
              id: { type: String },
              text: { type: String },
            },
          ],
        },
      ],
      type:{ type: String },
      word:{ type: String }
  },
  {
    timestamps: true,
  }
);

const Word = mongoose.model("Words", wordsSchema);
module.exports = Word;

