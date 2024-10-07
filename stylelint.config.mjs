/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-prettier',
    'stylelint-config-rational-order/plugin',
  ],
  rules: {
    'prettier/prettier': [true, { severity: 'warning' }],
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': true,
        'empty-line-between-groups': true,
      },
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-comment'],
        ignore: ['after-declaration'],
      },
    ],
    'scss/double-slash-comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['between-comments', 'stylelint-commands'],
      },
    ],
  },
};
