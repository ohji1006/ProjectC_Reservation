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
import kr.or.connect.reservation.dao.CategoryDao;
import kr.or.connect.reservation.dto.Category;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { ApplicationConfig.class })
public class CategoryDaoJunitTest {

	@Autowired
	CategoryDao categoryDao;

	@Test
	public void testSelectAll() {

		List<Category> testCategoryList = new ArrayList<>();
		testCategoryList.add(new Category(1, "전시", 10));
		testCategoryList.add(new Category(2, "뮤지컬", 10));
		testCategoryList.add(new Category(3, "콘서트", 16));
		testCategoryList.add(new Category(4, "클래식", 10));
		testCategoryList.add(new Category(5, "연극", 13));

		List<Category> acturalCategoryList = categoryDao.selectAll();

		for (int i = 0; i < testCategoryList.size(); i++) {
			Assert.assertEquals(testCategoryList.get(i).getId(), acturalCategoryList.get(i).getId());
			Assert.assertEquals(testCategoryList.get(i).getCount(), acturalCategoryList.get(i).getCount());
			Assert.assertEquals(testCategoryList.get(i).getName(), acturalCategoryList.get(i).getName());
		}
	}

}
