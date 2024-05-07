import Icon, { IconProps } from './icon'

export interface GithubIconProps extends IconProps {}

const SeedOfLife = (props: GithubIconProps) => {
  return (
    <Icon {...props}>
      <g clip-path='url(#clip0_201_2)'>
        <path
          d='M2.93719 17.2355C2.97113 18.6422 3.48815 19.9942 4.40136 21.0645C5.31456 22.1349 6.56831 22.8584 7.95206 23.1135C9.33576 23.3686 10.765 23.1398 11.9999 22.4654C13.2348 23.139 14.6639 23.3673 16.0473 23.112C17.4306 22.8567 18.6842 22.1333 19.5973 21.0633C20.5105 19.9933 21.0279 18.6418 21.0626 17.2355C22.264 16.502 23.1766 15.3775 23.6471 14.0508C24.1176 12.7242 24.1176 11.2759 23.6471 9.94923C23.1765 8.62248 22.2639 7.49809 21.0626 6.76453C21.0287 5.35792 20.5116 4.00584 19.5984 2.9356C18.6853 1.86519 17.4316 1.14165 16.0479 0.886539C14.6643 0.631425 13.2348 0.860323 12.0001 1.53472C10.7651 0.861116 9.33609 0.632803 7.95275 0.888094C6.5694 1.14339 5.31605 1.86675 4.40271 2.9368C3.4895 4.00677 2.97214 5.35838 2.93741 6.76462C1.73602 7.49823 0.823497 8.62262 0.352937 9.94932C-0.117646 11.276 -0.117646 12.724 0.352937 14.0507C0.823519 15.3774 1.73602 16.5018 2.93741 17.2354L2.93719 17.2355ZM3.98573 14.1475L4.21664 14.2809C4.60476 13.6076 5.12923 13.0228 5.75659 12.5641C5.83802 13.4696 6.11562 14.3466 6.57004 15.1339C7.02456 15.9213 7.64506 16.6003 8.38846 17.1237C7.60799 17.4682 6.75902 17.6297 5.90644 17.5956C5.05401 17.5615 4.22058 17.3329 3.46997 16.9272C3.49375 15.9966 3.75044 15.0867 4.21651 14.2807L3.98573 14.1475ZM8.38844 6.87633C7.64503 7.39969 7.02454 8.07868 6.57011 8.86611C6.1156 9.65354 5.83799 10.5305 5.75657 11.4359C5.0675 10.9316 4.50318 10.2761 4.10682 9.51974C3.71055 8.7634 3.49266 7.92632 3.4701 7.0726C4.22062 6.66695 5.05405 6.43831 5.90657 6.40428C6.75909 6.37026 7.60806 6.53172 8.3886 6.87624L8.38844 6.87633ZM14.6323 6.30975V6.30966C13.8072 5.92788 12.909 5.73014 11.9998 5.73014C11.0907 5.73014 10.1924 5.92789 9.36734 6.30975C9.45944 5.46156 9.74461 4.64576 10.2009 3.92484C10.6572 3.20392 11.2726 2.59714 11.9998 2.15095C12.793 2.63671 13.4518 3.31339 13.9163 4.1192C14.3049 4.79151 14.5487 5.53761 14.6322 6.30966L14.6323 6.30975ZM19.7832 9.71934C19.3951 10.3926 18.8706 10.9773 18.2433 11.436C18.1618 10.5305 17.8842 9.65363 17.4297 8.86622C16.9752 8.07879 16.3547 7.3998 15.6113 6.87644C16.3919 6.53191 17.2408 6.37044 18.0933 6.40448C18.9458 6.43851 19.7792 6.66715 20.5298 7.0728C20.5061 8.00354 20.2494 8.91344 19.7833 9.71927L19.7832 9.71934ZM15.6114 17.1239C16.3547 16.6004 16.9752 15.9214 17.4297 15.1341C17.8842 14.3467 18.1619 13.4697 18.2433 12.5643C18.9323 13.0687 19.4967 13.7242 19.8929 14.4805C20.2893 15.2369 20.5071 16.0739 20.5297 16.9277C19.7791 17.3333 18.9458 17.562 18.0932 17.596C17.2408 17.63 16.3918 17.4685 15.6114 17.124L15.6114 17.1239ZM9.36756 17.6904C10.1927 18.0723 11.0908 18.27 12 18.27C12.9092 18.27 13.8074 18.0723 14.6325 17.6904C14.5404 18.5386 14.2552 19.3545 13.7989 20.0754C13.3426 20.7963 12.7272 21.4031 12 21.8492C11.2069 21.3635 10.548 20.6868 10.0835 19.881C9.69488 19.2087 9.45103 18.4625 9.36752 17.6904H9.36756ZM14.6414 16.5732V16.5733C14.3797 16.39 14.134 16.1849 13.907 15.96C12.9799 15.034 12.4083 13.8112 12.2923 12.506C12.9554 12.9729 13.509 13.5786 13.9147 14.2809C14.3203 14.9832 14.5682 15.7654 14.6414 16.5732ZM12.5841 12.0002C13.3182 11.6582 14.1181 11.4807 14.9279 11.4799C15.7418 11.481 16.5457 11.6586 17.2844 12.0002C16.5457 12.3419 15.7418 12.5194 14.9279 12.5205C14.1181 12.5198 13.3181 12.3422 12.5841 12.0002ZM12.2923 11.4943C12.4083 10.1892 12.9799 8.96651 13.907 8.04028C14.134 7.81545 14.3797 7.61032 14.6414 7.42707C14.5682 8.23481 14.3203 9.01702 13.9147 9.71932C13.509 10.4217 12.9554 11.0273 12.2923 11.4942V11.4943ZM9.35874 7.42716C9.62054 7.61032 9.86621 7.81554 10.0932 8.04037C11.0203 8.96642 11.5919 10.1892 11.7079 11.4944C11.0447 11.0275 10.4911 10.4218 10.0855 9.71947C9.67983 9.01713 9.43192 8.23499 9.35874 7.42723V7.42716ZM11.416 12.0003C10.6819 12.3423 9.88201 12.5199 9.07225 12.5206C8.25844 12.5195 7.45443 12.342 6.71578 12.0003C7.45441 11.6586 8.25842 11.4811 9.07225 11.48C9.88206 11.4808 10.682 11.6583 11.416 12.0003ZM11.7078 12.5062H11.7079C11.5919 13.8114 11.0203 15.034 10.0932 15.9603C9.86621 16.1851 9.62054 16.3902 9.35883 16.5735C9.43192 15.7657 9.67983 14.9835 10.0855 14.2812C10.4911 13.5789 11.0447 12.9732 11.7079 12.5063L11.7078 12.5062ZM12.0001 13.7921C12.423 15.1714 13.3179 16.3581 14.5279 17.1441C13.7423 17.5341 12.8772 17.7369 12.0001 17.7369C11.123 17.7369 10.2579 17.5341 9.47227 17.1441C10.6822 16.3582 11.5771 15.1715 12.0001 13.7921ZM13.5444 12.8919C14.9517 13.2234 16.4311 13.0428 17.7173 12.3823C17.6285 13.7682 17.038 15.0744 16.0563 16.0566C15.7915 16.3209 15.5016 16.5589 15.1908 16.7672C15.1156 15.3218 14.5325 13.9494 13.5443 12.8918L13.5444 12.8919ZM14.9279 10.9467C14.4621 10.9477 13.9978 11.002 13.5444 11.1087C14.5326 10.0513 15.1156 8.67893 15.1908 7.23336C15.5017 7.44161 15.7915 7.67963 16.0564 7.94397C17.0381 8.92618 17.6285 10.2322 17.7173 11.6182C16.8533 11.178 15.8976 10.9478 14.928 10.9467L14.9279 10.9467ZM12.0001 10.2085C11.5772 8.82911 10.6823 7.64252 9.47227 6.85651C10.2578 6.46657 11.123 6.2637 12.0001 6.2637C12.8772 6.2637 13.7422 6.46657 14.5279 6.85651C13.318 7.64245 12.4231 8.82902 12.0001 10.2085ZM10.4557 11.1087C9.0484 10.7772 7.56901 10.9579 6.28278 11.6182C6.37158 10.2323 6.96203 8.92618 7.94372 7.94394C8.20848 7.67961 8.49842 7.4416 8.80927 7.23334C8.88435 8.67875 9.46743 10.0511 10.4556 11.1087L10.4557 11.1087ZM9.07218 13.054C9.53808 13.0529 10.0022 12.9986 10.4557 12.8919C9.46759 13.9494 8.88451 15.3217 8.80933 16.7671C8.49849 16.5589 8.20855 16.3209 7.94379 16.0565C6.962 15.0743 6.37164 13.7683 6.28284 12.3823C7.14683 12.8225 8.10248 13.0527 9.0722 13.0538L9.07218 13.054ZM9.06133 22.6821V22.682C7.65567 22.6802 6.30219 22.1499 5.26929 21.1963C4.23655 20.2426 3.60027 18.9356 3.48672 17.5345C4.31919 17.9319 5.23049 18.1367 6.15297 18.1337C7.07538 18.1307 7.98536 17.9199 8.81522 17.5171C8.88067 18.4376 9.15315 19.3315 9.61245 20.1318C10.0717 20.9322 10.7059 21.6185 11.4676 22.1396C10.7154 22.496 9.89352 22.6812 9.06111 22.6819L9.06133 22.6821ZM17.7334 21.9307C16.8843 22.4229 15.9202 22.6821 14.9387 22.6821C14.1063 22.6813 13.2845 22.496 12.5323 22.1396C13.294 21.6186 13.9282 20.9323 14.3875 20.1319C14.8468 19.3314 15.1193 18.4376 15.1847 17.5172C16.0146 17.92 16.9245 18.1307 17.847 18.1338C18.7694 18.1367 19.6807 17.9319 20.5132 17.5345C20.4408 18.4378 20.1499 19.3098 19.6657 20.0757C19.1814 20.8415 18.5183 21.4781 17.7334 21.9308L17.7334 21.9307ZM23.4668 12.0002C23.4684 12.9068 23.2489 13.8001 22.8274 14.6027C22.4059 15.4053 21.795 16.093 21.0478 16.6064C20.9769 15.6863 20.699 14.7941 20.2348 13.9964C19.7707 13.1987 19.1323 12.5163 18.3675 12C19.1385 11.4804 19.7807 10.7915 20.2451 9.98594C20.7036 9.19296 20.978 8.3071 21.0478 7.39369C21.795 7.90708 22.4059 8.59484 22.8274 9.39745C23.2489 10.2001 23.4684 11.0934 23.4668 11.9999V12.0002ZM14.9387 1.31832C16.3444 1.32014 17.6979 1.85053 18.7308 2.80409C19.7634 3.75775 20.3997 5.06478 20.5133 6.46591C19.6808 6.06859 18.7695 5.86381 17.8471 5.86677C16.9246 5.8698 16.0146 6.08057 15.1848 6.48335C15.1196 5.55661 14.8439 4.65687 14.3785 3.85266C13.9205 3.05856 13.2896 2.37773 12.5326 1.86079C13.2848 1.50437 14.1065 1.31912 14.939 1.31834L14.9387 1.31832ZM6.26664 2.06964C7.11578 1.57746 8.07977 1.31832 9.06133 1.31832C9.89363 1.3191 10.7155 1.50435 11.4678 1.86077C10.7061 2.38178 10.072 3.06807 9.61267 3.86852C9.15338 4.66898 8.88088 5.56281 8.81544 6.48322C7.98556 6.08044 7.07558 5.86968 6.15319 5.86663C5.23069 5.86368 4.31939 6.06846 3.48694 6.46586C3.55934 5.56263 3.85023 4.69058 4.33453 3.92472C4.81873 3.15892 5.48194 2.52229 6.26684 2.0696L6.26664 2.06964ZM2.17348 8.04037C2.41315 7.80199 2.67384 7.58567 2.95222 7.394C3.02323 8.31406 3.30109 9.20627 3.76525 10.0038C4.22941 10.8015 4.86769 11.4839 5.63263 12.0002C4.86153 12.5198 4.21933 13.2087 3.75492 14.0143H3.75501C3.2964 14.8072 3.02211 15.6931 2.95222 16.6063C2.04866 15.983 1.34829 15.1077 0.938312 14.0894C0.52833 13.0711 0.426752 11.9547 0.646376 10.8791C0.865996 9.80361 1.39707 8.81635 2.17348 8.04021L2.17348 8.04037Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_201_2'>
          <rect width='24' height='24' fill='currentColor' />
        </clipPath>
      </defs>
    </Icon>
  )
}

export default SeedOfLife
