package kr.or.connect.reservation.dao.test;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import kr.or.connect.reservation.config.ApplicationConfig;
import kr.or.connect.reservation.config.DBConfig;
import kr.or.connect.reservation.dao.ProductDao;
import kr.or.connect.reservation.dto.Product;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { ApplicationConfig.class })
public class ProductDaoJunitTest {
	@Autowired
	ProductDao productDao;

	@Test
	public void testSelectAll() {
		List<Product> testProductList = new ArrayList<>();
		testProductList.add(new Product((long) 2, (long) 2, "퀀틴 블레이크", "KT&G 상상마당 홍대 갤러리 (4, 5F)",
				"KT&G 상상마당은 20세기 거장시리즈 기획전 일환으로 전 세계적으로 사랑 받는 영국 최고의 일러스트레이터 퀀틴 블레이크(Quentin Blake, 1932-) 전시를 오는 10월 21일(토)부터 내년 2월 20일(화)까지 서울 서교동에 위치한 KT&G 상상마당 갤러리(4,5F)에서 진행한다. 영국 작가 로알드 달(Roald Dahl, 1916-1990)의 아동 소설 『찰리와 초콜릿 공장』 의 원화 작가로 유명한 퀀틴 블레이크는 지난 60여 년간 편안한 그림체와 성인들도 공감할 수 있는 동화들을 꾸준히 발표해왔다. 이번 전시에는 원화 작가에서 나아가 글과 그림을 통한 스토리텔링에 뛰어난 아티스트로서의 면모를 조명하고, 『찰리와 초콜릿 공장』 원화를 비롯한 퀀틴 블레이크의 작품 180여 점과 그의 작업실을 재현해낸 공간을 선보인다.",
				"img/2_th_3.png"));
		testProductList.add(new Product((long) 3, (long) 3, "ALICE : Into The Rabbit Hole",
				"서울숲 갤러리아포레 The Seouliteum G층 (B2)\n",
				"<반 고흐 인사이드>, <클림트 인사이드>에 이은\n㈜미디어앤아트의 여섯 번째 아트 프로젝트 <ALICE : into the rabbit hole>은\n루이스 캐럴의 <이상한 나라의 앨리스>, <거울나라의 앨리스> 시리즈를\n현대적인 시각으로 표현해낸 새로운 컨셉의 전시입니다.\n\n동화의 새 패러다임을 열며 전 세계인들의 사랑을 받은 불멸의 명작,\n루이스 캐럴의 ‘앨리스’ 시리즈. 그동안은 책, 애니메이션과 영화 등 2차원 세계에서만\n만나볼 수 있던 이 매력적인 동화의 세계관이 현대적인 감각으로 재해석되어\n예쁘고, 즐겁고, 행복해지는 3차원 테마파크 ‘앨리스 랜드’를 만나보세요.\n\n개성 넘치는 일러스트레이션 작가, 감각적인 뮤지션, 키치한 설치작가와\n대중문화를 선도하는 영상크루 등 총 23팀이 ㈜미디어앤아트와 만나\n저마다의 ‘앨리스’와 ‘원더랜드’를 만들어냈습니다.\n\n아티스트 팀들과 협업을 통해 감상의 한계를 뛰어넘어\n앨리스의 기상천외한 모험을 표현해낸 이번 전시는\n딱딱한 일상에서 탈출하는 신나고 즐거운 경험이 될 것입니다.",
				"img/3_th_9.png"));
		testProductList.add(new Product((long) 4, (long) 4, "99% 디자인 엑스포", "코엑스 Hall B",
				"99% 디자인 엑스포는 국내 최초로 대학이 주최하는 예술 디자인 박람회 입니다.\n99% 디자인은 '사용자에 의해 (by the people)완성되는 디자인'을 뜻하며\n소수만 누리는 디자인이 아닌 '모두를 위한 (for the people)디자인'을 지향합니다.",
				"img/4_th_11.png"));
		testProductList.add(new Product((long) 5, (long) 5, "알렉산더 지라드전", "예술의전당 한가람미술관 3층(5,6 전시실)\n",
				"알렉산더 지라드, 디자이너의 세계 展\nAlexander Girard, A Designer's Universe\n\n2017년 12월 22일부터 2018년 3월 4일까지 예술의전당 한가람미술관에서 20세기 미국 모던디자인을 대표하는 시대의 아이콘, 알렉산더 지라드의 대규모 회고전을 아시아 최초로 개최한다. 이번 전시는 지라드의 인테리어와 사진, 텍스타일, 가구, 장식소품, 수집품 등 5,000여 점 이상의 작품을 소장하고 있는 비트라 디자인 미술관(Vitra Design Museum)이 그의 삶과 작품세계를 심층적으로 연구해 기획되었으며, 700여 점의 작품을 총 4부로 구성해 종합적이며 다이나믹하게 보여준다.\n이번 대규모 알렉산더 지라드 회고전에서는 전 세계적으로 큰 사랑을 받고 있는 작품 <LOVE>, <International LOVE>를 포함해 토탈디자인을 추구했던 그의 완전한 디자인 세계를 생생하게 경험할 수 있다. 뿐만 아니라 지라드와 협력한 동시대의 유명 건축가, 디자이너, 예술가인 찰스 임스와 레이 임스(Charles Eames and Ray Eames), 조지 넬슨(George Nelson), 조지아 오키프(Georgia O'keefe), 에밀리오 푸치(Emilio Pucci)등 과의 관계 및 영향 또한 살펴볼 수 있다.\n국내에 베어브릭과 목각인형 컬렉션으로 탄탄한 마니아층을 보유하고 있는 알렉산더 지라드의 디자인은 이번 전시를 통해 국내의 많은 인테리어 디자인 애호가는 물론이고 전 세대를 아울러 특별한 경험을 선물할 것으로 기대한다.",
				"img/5_th_13.png"));

		List<Product> actualProductList = productDao.selectAll((long) 1, (long) 4);

		for (int i = 0; i < testProductList.size(); i++) {
			Assert.assertEquals(testProductList.get(i).getDisplayInfoId(), actualProductList.get(i).getDisplayInfoId());
			Assert.assertEquals(testProductList.get(i).getProductId(), actualProductList.get(i).getProductId());
			Assert.assertEquals(testProductList.get(i).getProductDescription(),
					actualProductList.get(i).getProductDescription());
			Assert.assertEquals(testProductList.get(i).getPlaceName(), actualProductList.get(i).getPlaceName());
			Assert.assertEquals(testProductList.get(i).getProductContent(),
					actualProductList.get(i).getProductContent());
			Assert.assertEquals(testProductList.get(i).getProductImageUrl(),
					actualProductList.get(i).getProductImageUrl());
		}
	}

	@Test
	public void testSelectAllAtCategory() {
		Assert.assertEquals(59, productDao.selectCount());
	}

	@Test
	public void testSelectCount() {
		Assert.assertEquals(10, productDao.selectCountAtCategory(1));
		Assert.assertEquals(10, productDao.selectCountAtCategory(2));
		Assert.assertEquals(16, productDao.selectCountAtCategory(3));
		Assert.assertEquals(10, productDao.selectCountAtCategory(4));
		Assert.assertEquals(13, productDao.selectCountAtCategory(5));
	}

	@Test
	public void testSelectCountAtCategory() {
		List<Product> testList = new ArrayList<>();
		testList.add(new Product((long) 1, (long) 1, "Paper, Present:너를 위한 선물", "대림미술관",
				"대림미술관은 오는 12월 7일부터 2018년 5월 27일까지 세계적인 아티스트들의 섬세한 감각과 아날로그적 소재인 종이가 만나 감성적인 매체로 확장되는 과정을 소개하는 전시 〈PAPER, PRESENT: 너를 위한 선물〉을 개최합니다. 이번 전시에서는 다양한 분야에서 활동하고 있는 아티스트들이 종이의 본래적 속성에 집중하여 재료 자체의 순수한 아름다움을 담은 작품들을 일곱 개의 감각적인 공간에서 선보입니다. 바람, 별빛, 햇살과 같은 자연 요소와 기억, 설렘과 같은 감정의 요소를 종이와 결합하여 구성한 공간들은, 자연 현상을 감각적으로 경험하고 아날로그적 정서를 자극하는 매체로서 종이를 경험하게 하며 종이에 감성을 입혀 예술로 만나는 특별한 시간을 선물할 것입니다.",
				"img/1_th_1.png"));
		testList.add(new Product((long) 2, (long) 2, "퀀틴 블레이크", "KT&G 상상마당 홍대 갤러리 (4, 5F)",
				"KT&G 상상마당은 20세기 거장시리즈 기획전 일환으로 전 세계적으로 사랑 받는 영국 최고의 일러스트레이터 퀀틴 블레이크(Quentin Blake, 1932-) 전시를 오는 10월 21일(토)부터 내년 2월 20일(화)까지 서울 서교동에 위치한 KT&G 상상마당 갤러리(4,5F)에서 진행한다. 영국 작가 로알드 달(Roald Dahl, 1916-1990)의 아동 소설 『찰리와 초콜릿 공장』 의 원화 작가로 유명한 퀀틴 블레이크는 지난 60여 년간 편안한 그림체와 성인들도 공감할 수 있는 동화들을 꾸준히 발표해왔다. 이번 전시에는 원화 작가에서 나아가 글과 그림을 통한 스토리텔링에 뛰어난 아티스트로서의 면모를 조명하고, 『찰리와 초콜릿 공장』 원화를 비롯한 퀀틴 블레이크의 작품 180여 점과 그의 작업실을 재현해낸 공간을 선보인다.",
				"img/2_th_3.png"));
		testList.add(new Product((long) 3, (long) 3, "ALICE : Into The Rabbit Hole",
				"서울숲 갤러리아포레 The Seouliteum G층 (B2)\n",
				"<반 고흐 인사이드>, <클림트 인사이드>에 이은\n㈜미디어앤아트의 여섯 번째 아트 프로젝트 <ALICE : into the rabbit hole>은\n루이스 캐럴의 <이상한 나라의 앨리스>, <거울나라의 앨리스> 시리즈를\n현대적인 시각으로 표현해낸 새로운 컨셉의 전시입니다.\n\n동화의 새 패러다임을 열며 전 세계인들의 사랑을 받은 불멸의 명작,\n루이스 캐럴의 ‘앨리스’ 시리즈. 그동안은 책, 애니메이션과 영화 등 2차원 세계에서만\n만나볼 수 있던 이 매력적인 동화의 세계관이 현대적인 감각으로 재해석되어\n예쁘고, 즐겁고, 행복해지는 3차원 테마파크 ‘앨리스 랜드’를 만나보세요.\n\n개성 넘치는 일러스트레이션 작가, 감각적인 뮤지션, 키치한 설치작가와\n대중문화를 선도하는 영상크루 등 총 23팀이 ㈜미디어앤아트와 만나\n저마다의 ‘앨리스’와 ‘원더랜드’를 만들어냈습니다.\n\n아티스트 팀들과 협업을 통해 감상의 한계를 뛰어넘어\n앨리스의 기상천외한 모험을 표현해낸 이번 전시는\n딱딱한 일상에서 탈출하는 신나고 즐거운 경험이 될 것입니다.",
				"img/3_th_9.png"));
		testList.add(new Product((long) 4, (long) 4, "99% 디자인 엑스포", "코엑스 Hall B",
				"99% 디자인 엑스포는 국내 최초로 대학이 주최하는 예술 디자인 박람회 입니다.\n99% 디자인은 '사용자에 의해 (by the people)완성되는 디자인'을 뜻하며\n소수만 누리는 디자인이 아닌 '모두를 위한 (for the people)디자인'을 지향합니다.",
				"img/4_th_11.png"));

		List<Product> actualList = productDao.selectAllAtCategory(1, 0, 4);

		for (int i = 0; i < actualList.size(); i++) {
			Assert.assertEquals(testList.get(i).getDisplayInfoId(), actualList.get(i).getDisplayInfoId());
			Assert.assertEquals(testList.get(i).getProductId(), actualList.get(i).getProductId());
			Assert.assertEquals(testList.get(i).getProductDescription(), actualList.get(i).getProductDescription());
			Assert.assertEquals(testList.get(i).getPlaceName(), actualList.get(i).getPlaceName());
			Assert.assertEquals(testList.get(i).getProductContent(), actualList.get(i).getProductContent());
			Assert.assertEquals(testList.get(i).getProductImageUrl(), actualList.get(i).getProductImageUrl());
		}

	}

}
