/**
 * rkgttr-lzw
 *
 * Copyright © 2016 Erik Guittiere. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import LZW from '../src/index';
const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et sem eu ex tempus consectetur. Etiam varius eros eget odio faucibus, non facilisis mauris mattis. In maximus sit amet enim quis congue. Proin venenatis sit amet felis ac malesuada. Vivamus vehicula nisl non egestas cursus. Aliquam vitae ornare arcu. Ut auctor massa ac dolor efficitur pharetra porta eu metus. Maecenas tristique scelerisque placerat. Praesent tristique enim sapien, at faucibus mauris laoreet eget. Nullam vitae nunc vitae leo elementum finibus. Sed magna nisl, iaculis id rhoncus ut, lacinia condimentum nulla. Nunc nec convallis nibh.Donec in libero convallis, feugiat nunc a, gravida diam. Cras eget velit quis nisi sollicitudin fringilla. Mauris lobortis libero ut arcu cursus, ac varius tortor ultricies. Nunc id lorem in erat bibendum hendrerit. Praesent justo velit, ullamcorper id ligula sed, aliquam mattis lorem. Ut dapibus fringilla tortor, sed consequat tortor ornare in. In interdum libero nisi. Ut accumsan mattis varius. Suspendisse semper, neque eu lacinia egestas, velit arcu vestibulum erat, vel venenatis nisi quam sit amet risus. Mauris sapien erat, varius vel ex in, ullamcorper pharetra diam. Nullam dictum tempus leo at iaculis. Nunc a commodo nisi. Nunc lacinia condimentum molestie. Nulla consequat orci libero, at tristique nulla sodales id. Vivamus non vehicula magna. Integer a laoreet enim.Mauris sollicitudin congue risus eget auctor. Integer molestie justo nibh, et vulputate eros aliquam in. In rhoncus, nisi nec sollicitudin pellentesque, lectus sapien vehicula nisi, nec tincidunt lacus nisi egestas erat. Donec ultrices sit amet lacus eu luctus. Nulla accumsan justo quam, id gravida nulla dapibus nec. Phasellus eros tortor, consequat non sem eget, laoreet sagittis risus. Nullam viverra, arcu eu tempor aliquam, mi augue posuere est, eu interdum lorem tellus eu felis.Donec egestas at nisi ac tincidunt. Quisque ultrices velit ac erat viverra, ac scelerisque enim ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ac est eget justo volutpat varius nec ac metus. In suscipit tempor eros eget dignissim. Nullam suscipit lectus metus, id egestas justo malesuada a. Morbi in lorem in metus consequat fermentum ac vitae nisi. Nullam semper purus eu tristique condimentum. Sed fringilla arcu tortor, quis mattis velit bibendum ut. Fusce vitae mollis purus.Nullam aliquet nunc at eleifend posuere. Etiam bibendum ipsum lobortis lorem aliquam placerat. Nulla congue libero molestie elit tristique, eu euismod elit tincidunt. Suspendisse eu est nec arcu semper molestie. Aenean accumsan imperdiet odio vel fermentum. Proin nec iaculis est. Ut purus neque, scelerisque id nisi et, pulvinar venenatis nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed et odio pulvinar, ultrices ex ut, euismod sapien. Maecenas quis nibh pellentesque velit molestie imperdiet. Pellentesque arcu purus, sagittis vitae odio sed, pharetra convallis dui. Suspendisse viverra elit at massa mattis tincidunt. Integer congue odio mauris. Nunc egestas accumsan orci, eget tempor nisl maximus et. Vivamus viverra velit id sem varius, ullamcorper tincidunt urna ornare.',
  enctest = 'Lorem ipsuĄdolā sit amet, consectĖurēdĆiscing elđ. ProĪĭĒĝĄeuĭx ĠmpusęěĝğġrıEtiĔ variŃĭĴńegĖ oĥo fauĩbŃĘněŠaĩįĐńmŢœůatōsıIn ŰximŕĐĒĔśenž quħŅīueıĳĵźvƅƅŴƋƁēĕĒfĮƋūŻaleĈadaıViőſńƔhicula ƆslƶũřƤtańƲrĈŷ AįƉŏvđaeŜrnŒǍŒƲıUƂţtĎŰssƵƠċčģeffƱđĢ phǑtrƵpāƾĭļƛŃıMǌcƖńǭħōƉǍĨĮeŲȀǩƴǺǮtƐǮƤƅĒǽsǿƎĭƆĄǝpiƅĘŴŪţiťųĢƋƴāeƄŚȋ NƳƴĄǊƾǍnuncŐǋǍƣşȃĕntĉŠĪȠǶ SedơgǐƶħlĘŎƲŭąɈrhěƲńuė ȈɂƵĚnĥȽȿĄȳlƴıȬȵƶĞƌőɧƋƆbh.DěɭĶįbȄşɠɯŭĘƝugŎĒȳɫaĘgǮǊƧ ĥĔıCǮŘȩŐƞĒƉɱħiďČįĩȿĥźfœīiɧƨ ǸȣńčbǱȤȠɼ ɚērƲęĢǃȜȶőœŕǙr˂ʵlǽĩƤɩȴȶiɈǡăąźȄȝbʳɡɀhƅdĂœȪĳǌĝȾ jŃǙʗįɛȭĔĚrpȄɓɜigƳƵĝdȜǇuŏŰŵȤȦmǕĒƧșȡŠʦʄʩĿǱāĘ˶ƌĝǈȐ̋ģāǐĂˑŸźĪĠrdɀɺʴƷíēcƲmǝź˼ŶŐŒŔǄSŃˮɡħĝďăˮrŧeȆĻɜūɞĭŚȒƿĘƔ˨ʷʹƔȒɃlɀ˓ɛ͇ʗnƖ̢̬ƈ˺ȗđƚśŲɄʬŲďașƅŖŴ̮͆ŕ͒eľĪĘ˪mˬ̹ǩǫĂǭƵʐ̀ȫͰʏƱɤĿ̸ŕȺēĒɐƳħˊʈŅmmŝş̢ΉȶɝƆɟěɢȏɀ΍ƣ͌Əͻ̉ɠ̐˺Ēāĩ˱ɻĴȜȐŲȓȲ˪ʞƧΛɓƩƫĔŕŨƓeưɑƵŰɊʪŹĠŚģƵȥĂƄȖ.͠ƘʟǦʢĶɠ˳Ǎ͞ʕśŢğā̙ρ˯ΚƽȚˣ˥ΏȠhĘśvƳłƾĠŖońƢiǈĄĪ̙ ɕɗŦɌĐɬȶsόʡuʣǩĮƣȾƤȀĘƣğƀͣȚθκ˴ϸi̻ȶōȵˍȴĒȈζʜ͂ƽƿͦȪɶ͔ȶƳˇƤď͛ƃИūŕ͎̾ЉǄȬ̉ū̧̩ϟȒşϰɏɈʋaʍƵɦƴʏЋ̅ТƐǫĝɧЬŗ̊˃̼̌̏΢ƺźĹМɛυȧĸaʄ˽ńϓˊʩȯƫȄǮȜʸļ̾ŀǰσ˹ĔĘmʝŢϑǩϬƎ̗ƽϤļ̛Ȅ̞ĄˏĄĠщŘļƝŭɵɷȶƼ̈́ϭʆЛƠДĩ̞ȾıQƊsȆФœǺƮʘ̥ПȷƔrѤҝȂƣȅȔƅƇҘǦˉ CƴǜēpĠˢƾʡʝϼĩϬƉĤ˱˂Ƶ˂Ȁˢͳɠu˕пϬͷĘͳĪǺҲϬ ưȽǌϬʒүϭҲȏĿ̀ōʞҹҖļƦҽāҿāӁĒӃěӅŎƺȒҢӋȵeӎńӑƖeӔȫŏƠƽѕж˦vČɚpȝʿ̯ϺҝǵǄŹďŃĩșȐ̸Ďɼϔ̂˲ƷĐͺбȮԋĨĦИĞȿůġsкМҊӽşŰΛ˺ʎʪMā˕ˑɜ˿ԱԈя̑ŠȄɣɀƠȰǌАџԚĹͳłrЬļȑάƌΗȾĉıɆɈʥĪ̈сǓՇ̓Ęʚųќ˧͛˕ɻ˗ĄɚıFԌǍԽǍΚɒՄǶԙӹ˹śʇȶȝȃiƝɡѳĈȄΝŌŎĄ՞˚ɀĆĈѽoʰ˃˾ĂĄϮϰȇū͐ՀΕƍȹʳĴŻČϝǍҜՈϯƎѸǳħ΍Ɉ֚ӌЖҒɅ̲˚̵֙ѧȒԆՕ̷Łϛ֗ΜıAƕaźгĉеž̹ĥśŝiş͒ƝrԺͺƑĶТąЫɒƽ̤իń͔ІďǺҥħȆˍАķӊƳǊ̖͓͕ɱˋϙѻ͏ĒԩƤԫƵšĕϭղЄąćɀpœѯńĶšȟȡՎɇķŜŞǩמĪŒͯˆҙЦͬʵɛĻ֠ŝͤ͢nǷǹǻ͘ʛɳЁɧȏЅȔ͇͛ϜΜąֱ̝Ț˞Ђ؛ӟǒѦ؂Յԣ͢ћ̬է؀̷ׂ˷ʹǬǮɮƢɒ̞̣֧s̳ĥǜզѢҡƵҜȝǛǝơ՛ҏ֥ȪπƼģϐȔׁԨűΈͻɫ҉ƾׯдָǎĩϤʖѩĎƷƹżžЬȪƪƬͪمع؞΅ɈєԄϷͰͲ˯َґĒĢɋ̕Ǒ.',
  whitespace = /(\r?\n|\r|\s+)/g;

describe('LZW', () => {
  describe('LZW.encode()', () => {
    it('should return the encoded string', () => {
      expect(LZW.encode(str)).to.be.equal(enctest);
    });
    it('should not re-encode an already encoded string', () => {
      expect(LZW.encode(enctest)).to.be.equal(enctest);
    });
    it('should return a smallest or equal size string (in term of bytes size)', () => {
      expect(Buffer.byteLength(LZW.encode(str), 'utf-8')).to.be.at.most(Buffer.byteLength(str, 'utf-8'));
    });
  });
  describe('LZW.decode()', () => {
    it('should return decoded string', () => {
      expect(LZW.decode(enctest)).to.be.equal(str);
    });
    it('should not decode an already decoded string', () => {
      expect(LZW.decode(str)).to.be.equal(str);
    });
    it('should return a bigger or equal size string (in term of bytes size)', () => {
      expect(Buffer.byteLength(LZW.decode(LZW.encode(str)), 'utf-8')).to.be.at.least(Buffer.byteLength(LZW.encode(str), 'utf-8'));
    });
  });
  it('should return the same string after encoding then decoding', () => {
    expect(str).to.be.equal(LZW.decode(LZW.encode(str)));
  });

});
