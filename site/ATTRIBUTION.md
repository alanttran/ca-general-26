# Image attribution (official / campaign / public-domain portraits)

Candidate headshots live under `public/images/candidates/` as **WebP** (`{photoSlug}.webp`), referenced by optional `photoSlug` on each candidate in `src/data/races/*.ts`.

Portraits are produced by `npm run fetch-portraits` from **English Wikipedia** infobox thumbnails (Wikimedia Commons). Each underlying Commons file has its own license on the file description page (often **CC BY-SA** or **public domain** for U.S. government works). This site stores a **256×256 square crop** in WebP only; for full resolution and exact attribution text, follow the **Commons file** link below.

| File (`photoSlug`) | Wikipedia article | Original image (Commons) |
| ------------------ | ------------------- | ------------------------- |
| `alex-villanueva.webp` | [Alex Villanueva](https://en.wikipedia.org/wiki/Alex_Villanueva) | [Commons](https://upload.wikimedia.org/wikipedia/commons/5/53/Sheriff-Villanueva-Official-Portrait.jpg) |
| `ben-allen.webp` | [Ben Allen (California politician)](https://en.wikipedia.org/wiki/Ben_Allen_(California_politician)) | [Commons](https://upload.wikimedia.org/wikipedia/commons/3/3c/Ben_Allen%2C_2021.jpg) |
| `carl-demaio.webp` | [Carl DeMaio](https://en.wikipedia.org/wiki/Carl_DeMaio) | [Commons](https://upload.wikimedia.org/wikipedia/commons/a/a6/Carl_DeMaio%2C_California_State_Assembly_Portrait.jpg) |
| `caroline-menjivar.webp` | [Caroline Menjivar](https://en.wikipedia.org/wiki/Caroline_Menjivar) | [Commons](https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Caroline_Menjivar%2C_2026.jpg/3840px-Caroline_Menjivar%2C_2026.jpg) |
| `catherine-blakespear.webp` | [Catherine Blakespear](https://en.wikipedia.org/wiki/Catherine_Blakespear) | [Commons](https://upload.wikimedia.org/wikipedia/commons/0/0f/2025_portrait_Catherine_Blakespear.jpg) |
| `chris-ward.webp` | [Chris Ward (California politician)](https://en.wikipedia.org/wiki/Chris_Ward_(California_politician)) | [Commons](https://upload.wikimedia.org/wikipedia/commons/0/02/Chris_Ward%2C_2025.jpg) |
| `david-alvarez.webp` | [David Alvarez (politician)](https://en.wikipedia.org/wiki/David_Alvarez_(politician)) | [Commons](https://upload.wikimedia.org/wikipedia/commons/a/a8/David_Alvarez%2C_2022.jpg) |
| `don-wagner.webp` | [Donald P. Wagner](https://en.wikipedia.org/wiki/Donald_P._Wagner) | [Commons](https://upload.wikimedia.org/wikipedia/commons/7/73/Donald_P._Wagner%2C_2022.jpg) |
| `eleni-kounalakis.webp` | [Eleni Kounalakis](https://en.wikipedia.org/wiki/Eleni_Kounalakis) | [Commons](https://upload.wikimedia.org/wikipedia/commons/d/d9/LG_Kounalakis_Signing_%28cropped%29.jpg) |
| `fiona-ma.webp` | [Fiona Ma](https://en.wikipedia.org/wiki/Fiona_Ma) | [Commons](https://upload.wikimedia.org/wikipedia/commons/1/14/Fiona_Ma_official2.jpg) |
| `gloria-romero.webp` | [Gloria Romero (politician)](https://en.wikipedia.org/wiki/Gloria_Romero_(politician)) | [Commons](https://upload.wikimedia.org/wikipedia/commons/e/e0/Gloria_Romero%2C_c._2007.jpg) |
| `jane-kim.webp` | [Jane Kim](https://en.wikipedia.org/wiki/Jane_Kim) | [Commons](https://upload.wikimedia.org/wikipedia/commons/f/f1/SupervisorJaneKim.png) |
| `jim-desmond.webp` | [Jim Desmond](https://en.wikipedia.org/wiki/Jim_Desmond) | [Commons](https://upload.wikimedia.org/wikipedia/commons/6/6a/Jim_Desmond_Official_Portrait.jpg) |
| `karen-bass.webp` | [Karen Bass](https://en.wikipedia.org/wiki/Karen_Bass) | [Commons](https://upload.wikimedia.org/wikipedia/commons/c/c7/Karen_Bass%2C_2023_%28cropped%29.jpg) |
| `kent-lee.webp` | [Kent Lee (politician)](https://en.wikipedia.org/wiki/Kent_Lee_(politician)) | [Commons](https://upload.wikimedia.org/wikipedia/commons/9/95/Councilmember-kent-lee-cd6.jpg) |
| `lashae-sharp-collins.webp` | [LaShae Sharp-Collins](https://en.wikipedia.org/wiki/LaShae_Sharp-Collins) | [Commons](https://upload.wikimedia.org/wikipedia/commons/4/47/LaShae_Sharp-Collins%2C_2024.jpg) |
| `laura-friedman.webp` | [Laura Friedman](https://en.wikipedia.org/wiki/Laura_Friedman) | [Commons](https://upload.wikimedia.org/wikipedia/commons/0/0f/Laura_Friedman%2C_House_portrait.jpg) |
| `malia-cohen.webp` | [Malia Cohen](https://en.wikipedia.org/wiki/Malia_Cohen) | [Commons](https://upload.wikimedia.org/wikipedia/commons/0/03/Malia_Cohen_State_Controller_portrait.jpg) |
| `mara-elliott.webp` | [Mara Elliott](https://en.wikipedia.org/wiki/Mara_Elliott) | [Commons](https://upload.wikimedia.org/wikipedia/commons/1/1d/CityAttorneyMaraElliott.jpg) |
| `marni-von-wilpert.webp` | [Marni von Wilpert](https://en.wikipedia.org/wiki/Marni_von_Wilpert) | [Commons](https://upload.wikimedia.org/wikipedia/commons/5/50/Marni_von_Wilpert.jpg) |
| `mike-gipson.webp` | [Mike Gipson](https://en.wikipedia.org/wiki/Mike_Gipson) | [Commons](https://upload.wikimedia.org/wikipedia/commons/2/2c/Mike_Gipson_assembly_portrait.jpg) |
| `mike-levin.webp` | [Mike Levin](https://en.wikipedia.org/wiki/Mike_Levin) | [Commons](https://upload.wikimedia.org/wikipedia/commons/9/9e/Rep._Mike_Levin_official_photo.jpg) |
| `monica-montgomery-steppe.webp` | [Monica Montgomery Steppe](https://en.wikipedia.org/wiki/Monica_Montgomery_Steppe) | [Commons](https://upload.wikimedia.org/wikipedia/commons/0/0c/Monica_Montgomery_Steppe.png) |
| `nick-schultz.webp` | [Nick Schultz (politician)](https://en.wikipedia.org/wiki/Nick_Schultz_(politician)) | [Commons](https://upload.wikimedia.org/wikipedia/commons/d/d2/Nick_Schultz%2C_2024.jpg) |
| `nithya-raman.webp` | [Nithya Raman](https://en.wikipedia.org/wiki/Nithya_Raman) | [Commons](https://upload.wikimedia.org/wikipedia/commons/1/15/Nithya_Raman%2C_2022.jpg) |
| `richard-bailey.webp` | [Richard Bailey (politician)](https://en.wikipedia.org/wiki/Richard_Bailey_(politician)) | [Commons](https://upload.wikimedia.org/wikipedia/commons/2/20/RichardBaileyCrop.jpg) |
| `rick-zbur.webp` | [Rick Zbur](https://en.wikipedia.org/wiki/Rick_Zbur) | [Commons](https://upload.wikimedia.org/wikipedia/commons/e/e7/Rick_Chavez_Zbur%2C_2022.jpg) |
| `robert-luna.webp` | [Robert Luna](https://en.wikipedia.org/wiki/Robert_Luna) | [Commons](https://upload.wikimedia.org/wikipedia/commons/b/b7/Sheriff_Robert_Luna%2C_2022.jpg) |
| `sara-jacobs.webp` | [Sara Jacobs](https://en.wikipedia.org/wiki/Sara_Jacobs) | [Commons](https://upload.wikimedia.org/wikipedia/commons/b/b0/Representative_Sara_Jacobs_full_portrait.jpg) |
| `scott-peters.webp` | [Scott Peters (politician)](https://en.wikipedia.org/wiki/Scott_Peters_(politician)) | [Commons](https://upload.wikimedia.org/wikipedia/commons/4/49/Scott_Peters_official_portrait_116th_Congress.jpg) |
| `shirley-weber.webp` | [Shirley Weber](https://en.wikipedia.org/wiki/Shirley_Weber) | [Commons](https://upload.wikimedia.org/wikipedia/commons/a/a2/Shirley_Weber.jpg) |
| `steve-hilton.webp` | [Steve Hilton](https://en.wikipedia.org/wiki/Steve_Hilton) | [Commons](https://upload.wikimedia.org/wikipedia/commons/a/a9/Steve_Hilton_%2854233445987_crop%29.jpg) |
| `steve-padilla.webp` | [Steve Padilla](https://en.wikipedia.org/wiki/Steve_Padilla) | [Commons](https://upload.wikimedia.org/wikipedia/commons/a/af/Steve_Padilla%2C_2023.jpg) |
| `tasha-boerner.webp` | [Tasha Boerner](https://en.wikipedia.org/wiki/Tasha_Boerner) | [Commons](https://upload.wikimedia.org/wikipedia/commons/0/0b/Tasha_Boerner%2C_2026_%28cropped%29.png) |
| `tom-umberg.webp` | [Tom Umberg](https://en.wikipedia.org/wiki/Tom_Umberg) | [Commons](https://upload.wikimedia.org/wikipedia/commons/d/d0/Tom_Umberg_CA_Senate_official_photo.jpg) |
| `xavier-becerra.webp` | [Xavier Becerra](https://en.wikipedia.org/wiki/Xavier_Becerra) | [Commons](https://upload.wikimedia.org/wikipedia/commons/8/85/HHS_Xavier_Becerra.jpg) |
