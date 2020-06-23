package kr.or.connect.reservation.sql;

public class CategorySql {
	public final static String SELECT_ALL_WITH_COUNT = 
			"select category.id, category.name, count(*) as count "
			+ "from category "
			+ "join product as pr on category.id = pr.category_id "
			+ "join display_info on pr.id = display_info.product_id "
			+ "group by category.id, category.name";
}
