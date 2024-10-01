Spring Notes 
=============
Feild Injection 
    @Autowired // Feild Injection
    @Qualifier("another")
    private MyInterface diff;

    //Constructor Injection
    public DInjection(Diiferent diff){
    this.diff = diff;
    }

    //Setter Injection
    @Autowired
    public void setter(Diiferent diff){
    this.diff=diff;
    }

MCS in Spring(Model Controller Service)

Model contains the defination of the entity and @Entity is used to create its table in DB
    @Component
    @Entity
    public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int prodId;
    @Column(unique = true)
    private String prodName;
    private int prodPrice; }

Services contain the actual bussiness logic of the application
    public List<Product> getProds(){
        return repo.findAllDistinctProds();
    }

Controller uses the services and maps them with Crud Ops

A starter Controller which returns dummy data 
    @RestController
    public class About {
        @RequestMapping("/about")
        public String about(){
            return "This is SpringBoot project";
        }
    }

Repo is additional layer which extends JPARepository , it provides set of methods and is responsible for connecting with DB
you can use @Query anno to write SQL query as method

    @Repository
    public interface NameOfRepository extends JpaRepository<Model,PrimaryKey>{}

To directly inject data into your spring app you can use data.sql file in target/class 

To run spring app from cmd :
    copy path of mvnw.cmd
    go to cmd , go to proj directory
    and type "mvnw package" this will create jar file in target directory
    now use "java -jar myproj.jar"



